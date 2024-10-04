"use client"
import React, { useEffect, useRef } from "react";

const HackerBackground = ({
    color = "#0F0",
    fontSize = 14,
    className = "",
    speed = 1,
}) => {
    const canvasRef = useRef (null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        let animationFrameId;

        const columns = Math.floor(canvas.width / fontSize);
        const drops = new Array(columns).fill(1);

        const chars =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+";

        let lastTime = 0;
        const interval = 33; // ~30 fps

        const draw = (currentTime) => {
            animationFrameId = requestAnimationFrame(draw);

            if (currentTime - lastTime < interval) return;
            lastTime = currentTime;

            ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = color;
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = chars[Math.floor(Math.random() * chars.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i] += speed; // Use the speed prop to control fall rate
            }
        };

        animationFrameId = requestAnimationFrame(draw);

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, [color, fontSize, speed]);

    return (
        <canvas
            ref={canvasRef}
            className={`pointer-events-none ${className}`}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                opacity: 0.2,
            }}
        />
    );
};

export default HackerBackground;