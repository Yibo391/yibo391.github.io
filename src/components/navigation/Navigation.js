import React from 'react';

const Navigation = () => {
  const navItems = [
    { id: 'profile', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'hobbies', label: 'Beyond work' },
  ];

  return (
    <nav className="fixed left-1/2 top-4 z-50 flex w-[calc(100%-2rem)] max-w-3xl -translate-x-1/2 items-center justify-between rounded-2xl border border-white/70 bg-white/80 px-3 py-2 shadow-[0_10px_30px_rgba(15,23,42,0.12)] backdrop-blur-xl dark:border-slate-700/70 dark:bg-slate-900/80 sm:px-5">
      <a href="#profile" className="mr-2 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 via-violet-500 to-sky-500 font-extrabold text-white shadow-md" aria-label="Yibo Wang home">YW</a>
      <div className="nav-scroll flex min-w-0 items-center gap-1 overflow-x-auto">
        {navItems.map((item) => (
          <a key={item.id} href={`#${item.id}`} className="whitespace-nowrap rounded-xl px-2.5 py-2 text-xs font-bold text-slate-500 transition hover:bg-slate-900 hover:text-white dark:text-slate-300 dark:hover:bg-white dark:hover:text-slate-950 sm:px-3 sm:text-sm">
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
