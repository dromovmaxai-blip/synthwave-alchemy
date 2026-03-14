import { useScroll, useTransform, motion } from "framer-motion";

const particles = [
  { x: "10%", y: "5%", size: 4, speed: 0.3, opacity: 0.5, delay: 0 },
  { x: "25%", y: "15%", size: 3, speed: 0.5, opacity: 0.3, delay: 1 },
  { x: "40%", y: "25%", size: 5, speed: 0.2, opacity: 0.4, delay: 2 },
  { x: "55%", y: "10%", size: 3, speed: 0.6, opacity: 0.35, delay: 0.5 },
  { x: "70%", y: "35%", size: 4, speed: 0.35, opacity: 0.45, delay: 1.5 },
  { x: "85%", y: "20%", size: 3, speed: 0.45, opacity: 0.3, delay: 3 },
  { x: "15%", y: "50%", size: 5, speed: 0.25, opacity: 0.4, delay: 2.5 },
  { x: "60%", y: "60%", size: 3, speed: 0.55, opacity: 0.35, delay: 0.8 },
  { x: "35%", y: "70%", size: 4, speed: 0.4, opacity: 0.3, delay: 1.8 },
  { x: "80%", y: "80%", size: 3, speed: 0.3, opacity: 0.4, delay: 3.5 },
  { x: "5%", y: "90%", size: 5, speed: 0.5, opacity: 0.35, delay: 0.3 },
  { x: "50%", y: "75%", size: 3, speed: 0.35, opacity: 0.45, delay: 2.2 },
];

const Particle = ({ x, y, size, speed, opacity, delay }: typeof particles[0]) => {
  const { scrollY } = useScroll();
  const yOffset = useTransform(scrollY, [0, 5000], [0, -5000 * speed]);

  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        left: x,
        top: y,
        width: size,
        height: size,
        y: yOffset,
        opacity,
        backgroundColor: "hsl(var(--primary))",
        boxShadow: `0 0 ${size * 3}px hsl(var(--primary) / 0.6)`,
        animation: `pulse-glow 4s ease-in-out infinite ${delay}s`,
      }}
    />
  );
};

const GlobalBackground = () => {
  const { scrollY } = useScroll();
  const sphereY = useTransform(scrollY, [0, 5000], [0, -500]);
  const sphere2Y = useTransform(scrollY, [0, 5000], [0, -350]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {/* Large primary sphere */}
      <motion.div
        className="absolute rounded-full"
        style={{
          top: "15%",
          left: "25%",
          width: 600,
          height: 600,
          y: sphereY,
          background: "radial-gradient(circle, hsl(var(--primary) / 0.12) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Secondary accent sphere */}
      <motion.div
        className="absolute rounded-full"
        style={{
          top: "55%",
          right: "15%",
          width: 450,
          height: 450,
          y: sphere2Y,
          background: "radial-gradient(circle, hsl(var(--accent) / 0.07) 0%, transparent 70%)",
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
