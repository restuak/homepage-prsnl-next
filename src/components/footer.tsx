
export default function Footer(){
    return (
      <footer className="bg-[#000000] text-zinc-300 footer sm:footer-horizontal footer-center p-2 border-t border-t-zinc-600">
        <aside>
          <span>© {new Date().getFullYear()} | BASED IN INDONESIA-YO</span>
        </aside>
      </footer>
    );
}