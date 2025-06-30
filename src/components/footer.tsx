
export default function Footer(){
    return (
      <footer className="bg-[#000000] text-zinc-600 footer sm:footer-horizontal footer-center text-base-content p-2 border-t border-t-zinc-600">
        <aside>
          <span>© {new Date().getFullYear()} YK-INDONESIA</span>
        </aside>
      </footer>
    );
}