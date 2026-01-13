import { useEffect, ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  useEffect(() => {
    console.log('🔄 Layout montado - Carregando scripts...');

    // SCRIPT 1: UTMify UTMs (carrega primeiro)
    const utmScript = document.createElement('script');
    utmScript.src = 'https://cdn.utmify.com.br/scripts/utms/latest.js';
    utmScript.setAttribute('data-utmify-prevent-xcod-sck', '');
    utmScript.setAttribute('data-utmify-prevent-subids', '');
    
    utmScript.onload = () => {
      console.log('✅ UTMs carregadas');
      
      // SCRIPT 2: Define pixelId
      (window as any).pixelId = "69665d767cd14fb6f9ad68ac";
      console.log('✅ PixelId definido');
      
      // SCRIPT 3: UTMify Pixel (carrega depois)
      const pixelScript = document.createElement('script');
      pixelScript.src = 'https://cdn.utmify.com.br/scripts/pixel/pixel.js';
      
      pixelScript.onload = () => {
        console.log('✅ Pixel carregado');
        console.log('✅ Tipo fbq:', typeof (window as any).fbq);
      };
      
      pixelScript.onerror = () => {
        console.error('❌ Erro ao carregar pixel');
      };
      
      document.head.appendChild(pixelScript);
    };
    
    utmScript.onerror = () => {
      console.error('❌ Erro ao carregar UTMs');
    };
    
    document.head.appendChild(utmScript);

    // Cleanup: remove scripts quando componente desmontar
    return () => {
      console.log('🧹 Limpando scripts...');
    };
  }, []);

  return <>{children}</>;
};

export default Layout;