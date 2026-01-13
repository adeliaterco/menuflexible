import { useEffect, ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  useEffect(() => {
    console.log('🔄 Layout montado - Carregando scripts UTMify...');

    // SCRIPT 1: UTMify UTMs (carrega primeiro)
    const utmScript = document.createElement('script');
    utmScript.src = 'https://cdn.utmify.com.br/scripts/utms/latest.js';
    utmScript.setAttribute('data-utmify-prevent-xcod-sck', '');
    utmScript.setAttribute('data-utmify-prevent-subids', '');
    
    utmScript.onload = () => {
      console.log('✅ UTMs carregadas');
      
      // SCRIPT 2: UTMify Pixel (código IDÊNTICO ao original)
      (window as any).pixelId = "69665d767cd14fb6f9ad68ac";
      console.log('✅ PixelId definido:', (window as any).pixelId);
      
      const a = document.createElement("script");
      a.setAttribute("async", "");
      a.setAttribute("defer", "");
      a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
      
      a.onload = () => {
        console.log('✅ Pixel carregado com sucesso');
        console.log('✅ Tipo fbq:', typeof (window as any).fbq);
      };
      
      a.onerror = () => {
        console.error('❌ Erro ao carregar pixel.js');
      };
      
      document.head.appendChild(a);
    };
    
    utmScript.onerror = () => {
      console.error('❌ Erro ao carregar latest.js (UTMs)');
    };
    
    document.head.appendChild(utmScript);

  }, []); // Executa apenas uma vez quando o Layout monta

  return <>{children}</>;
};

export default Layout;