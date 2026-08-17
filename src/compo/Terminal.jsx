import { useEffect, useRef } from "react";

function TerminalRain() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let animationId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const characters =
      "01ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz{}[]();<>/\\$#@%&*+=-_|";

    const fontSize = 16;
    let columns = Math.floor(canvas.width / fontSize);

    const drops = Array(columns)
      .fill(0)
      .map(() => Math.random() * -100);

    function draw() {
      // Slight fade creates the trailing effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      drops.forEach((y, index) => {
        const text =
          characters[Math.floor(Math.random() * characters.length)];

        const x = index * fontSize;

        ctx.fillStyle = "#00ff66";
        ctx.fillText(text, x, y * fontSize);

        // Reset randomly after reaching bottom
        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          drops[index] = 0;
        }

        drops[index]++;
      });

      animationId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        background: "#000",
      }}
    />
  );
}

export default TerminalRain;