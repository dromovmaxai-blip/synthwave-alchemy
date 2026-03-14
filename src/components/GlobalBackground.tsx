import { useScroll, useTransform, motion } from "framer-motion";

const particles = [
  { x: "10%", y: 200, size: 4, speed: 0.3, opacity: 0.5, delay: 0 },
  { x: "25%", y: 600, size: 3, speed: 0.5, opacity: 0.3, delay: 1 },
  { x: "40%", y: 1000, size: 5, speed: 0.2, opacity: 0.4, delay: 2 },
  { x: "55%", y: 400, size: 3, speed: 0.6, opacity: 0.35, delay: 0.5 },
  { x: "70%", y: 1400, size: 4, speed: 0.35, opacity: 0.45, delay: 1.5 },
  { x: "85%", y: 800, size: 3, speed: 0.45, opacity: 0.3, delay: 3 },
  { x: "15%", y: 1800, size: 5, speed: 0.25, opacity: 0.4, delay: 2.5 },
  { x: "60%", y: 2200, size: 3, speed: 0.55, opacity: 0.35, delay: 0.8 },
  { x: "35%", y: 2600, size: 4, speed: 0.4, opacity: 0.3, delay: 1.8 },
  { x: "80%", y: 3000, size: 3, speed: 0.3, opacity: 0.4, delay: 3.5 },
  { x: "5%", y: 3400, size: 5, speed: 0.5, opacity: 0.35, delay: 0.3 },
  { x: "50%", y: 3800, size: 3, speed: 0.35, opacity: 0.45, delay: 2.2 },
];

const Particle = ({ x, y, size, speed, opacity, delay }: typeof particles[0]) => {
  const { scrollY } = useScroll();
  const yOffset = useTransform(scrollY, [0, 5000], [0, -5000 * speed]);

  return (
    <motion.div
      className="absolute rounded-full bg-primary"
      style={{
        left: x,
        top: y,
        width: size,
        height: size,
        y: yOffset,
        opacity,
        boxShadow: `0 0 ${size * 3}px hsl(var(--primary) / 0.6)`,
        animation: `pulse-glow 4s ease-in-out infinite ${delay}s`,
      }}
    />
  );
};

const GlobalBackground = () => {
  const { scrollY } = useScroll();
  const sphereY = useTransform(scrollY, [0, 5000], [0, -5000 * 0.15]);
  const sphere2Y = useTransform(scrollY, [0, 5000], [0, -5000 * 0.1]);

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -10 }}>
      {/* Large primary sphere */}
      <motion.div
        className="absolute rounded-full"
        style={{
          top: "20%",
          left: "30%",
          width: 500,
          height: 500,
          y: sphereY,
          background: "radial-gradient(circle, hsl(var(--primary) / 0.12) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Secondary accent sphere */}
      <motion.div
        className="absolute rounded-full"
        style={{
          top: "60%",
          right: "20%",
          width: 400,
          height: 400,
          y: sphere2Y,
          background: "radial-gradient(circle, hsl(var(--accent) / 0.06) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      {/* Floating particles */}
      {particles.map((p, i) => (
        <Particle key={i} {...p} />
      ))}
    </div>
  );
};

export default GlobalBackground;
