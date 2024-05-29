import IconSociales from "./ui/icon-sociales";
import Logo from "./ui/logo";

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Bottom area */}
        <div className="flex items-center justify-between flex-col sm:flex-row py-8 border-t border-gray-200">
          <Logo />
          {/* Copyrights note */}
          <div className="text-sm text-gray-600 my-2">
            &copy; Pergon Studio. Todos los derechos reservados.
          </div>
          {/* Social as */}
          <IconSociales />
        </div>
      </div>
    </footer>
  );
}
