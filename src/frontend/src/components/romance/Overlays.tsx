export default function Overlays() {
  return (
    <>
      {/* Rose petals overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-20"
        style={{
          backgroundImage: 'url(/assets/generated/rose-petals-overlay.dim_1920x1080.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          animation: 'float-drift 30s ease-in-out infinite',
        }}
      />
      
      {/* Glowing hearts overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-10"
        style={{
          backgroundImage: 'url(/assets/generated/glow-hearts-overlay.dim_1920x1080.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          animation: 'float-drift 40s ease-in-out infinite reverse',
        }}
      />
    </>
  );
}
