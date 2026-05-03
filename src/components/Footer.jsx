const Footer = () => {
  return (
    <footer className="bg-black py-20 border-t border-white/5">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-serif mb-8 tracking-tighter">AURORA.</h2>
            <p className="text-text-secondary max-w-sm mb-8 font-light">
              Elevating the everyday through conscious design and exceptional craftsmanship. Join our journey towards a more beautiful world.
            </p>
            <div className="flex gap-6 text-[10px] tracking-widest uppercase">
              <span className="text-text-secondary hover:text-white cursor-pointer">Instagram</span>
              <span className="text-text-secondary hover:text-white cursor-pointer">Twitter</span>
              <span className="text-text-secondary hover:text-white cursor-pointer">Pinterest</span>
            </div>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] mb-8 text-accent-primary">Navigation</h4>
            <ul className="flex flex-col gap-4 text-sm text-text-secondary">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/shop" className="hover:text-white transition-colors">Shop</a></li>
              <li><a href="/about" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] mb-8 text-accent-primary">Newsletter</h4>
            <p className="text-sm text-text-secondary mb-6">Stay updated with our latest releases.</p>
            <div className="flex border-b border-white/20 pb-2">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="bg-transparent border-none outline-none text-xs w-full tracking-widest"
              />
              <button className="text-xs uppercase tracking-widest font-bold">Join</button>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 text-[10px] uppercase tracking-[0.3em] text-white/40">
          <p>© 2026 AURORA DESIGN STUDIO. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
