import React, { Suspense, ComponentType, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Lazy3DProps {
  component: () => Promise<{ default: ComponentType<any> }>;
  fallback?: React.ReactNode;
  [key: string]: any;
}

class ThreeErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback?: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; fallback?: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? null;
    }
    return this.props.children;
  }
}

function detectWebGL(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const canvas = document.createElement('canvas');
    const gl =
      canvas.getContext('webgl2') ||
      canvas.getContext('webgl') ||
      canvas.getContext('experimental-webgl');
    return !!gl;
  } catch {
    return false;
  }
}

export function Lazy3D({ component, fallback = null, ...props }: Lazy3DProps) {
  const [webglOk, setWebglOk] = useState<boolean | null>(null);
  const LazyComponent = React.useMemo(() => React.lazy(component), [component]);

  useEffect(() => {
    setWebglOk(detectWebGL());
  }, []);

  if (webglOk === null) {
    return <div className="w-full h-full" style={{ pointerEvents: 'none' }}>{fallback}</div>;
  }

  if (!webglOk) {
    return <div className="w-full h-full" style={{ pointerEvents: 'none' }}>{fallback}</div>;
  }

  return (
    <div className="w-full h-full relative" style={{ pointerEvents: 'none' }}>
      <ThreeErrorBoundary fallback={fallback}>
        <Suspense fallback={fallback}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="w-full h-full"
            style={{ pointerEvents: 'auto' }}
          >
            <LazyComponent {...props} />
          </motion.div>
        </Suspense>
      </ThreeErrorBoundary>
    </div>
  );
}

export default Lazy3D;
