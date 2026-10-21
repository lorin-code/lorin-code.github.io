'use strict';

const root = document.documentElement;
const themeButton = document.querySelector('.theme-toggle');
const themeColor = document.querySelector('meta[name="theme-color"]');

function applyTheme(theme) {
  root.dataset.theme = theme;
  const dark = theme === 'dark';
  themeButton.setAttribute('aria-pressed', String(dark));
  themeButton.setAttribute('aria-label', dark ? '切换浅色主题' : '切换深色主题');
  themeButton.title = dark ? '切换浅色主题' : '切换深色主题';
  themeColor.content = dark ? '#101b18' : '#f5f8f7';
}

applyTheme(root.dataset.theme || 'light');
themeButton.addEventListener('click', () => {
  const theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  applyTheme(theme);
  try { localStorage.setItem('lorin-theme', theme); } catch { /* Theme works without storage. */ }
});

const copyButton = document.querySelector('.copy-email');
const copyStatus = document.querySelector('.copy-status');
copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText('lorin.msg@gmail.com');
    copyStatus.textContent = '邮箱已复制';
  } catch {
    copyStatus.textContent = '可直接选中邮箱复制，或点击邮箱发送邮件';
  }
});

if ('IntersectionObserver' in window) {
  const links = [...document.querySelectorAll('nav a')];
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      for (const link of links) {
        if (link.hash === '#' + entry.target.id) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      }
    }
  }, { rootMargin: '-20% 0px -60% 0px' });
  for (const link of links) {
    const section = document.querySelector(link.hash);
    if (section) observer.observe(section);
  }
}
