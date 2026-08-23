function Tag({ children }: { children: string }) {
  return <span className="text-[#f472b6]">{children}</span>;
}
function Punct({ children }: { children: string }) {
  return <span className="text-slate-500">{children}</span>;
}
function Attr({ children }: { children: string }) {
  return <span className="text-[var(--color-mint)]/90">{children}</span>;
}
function Val({ children }: { children: string }) {
  return (
    <span className="relative inline-block rounded bg-[var(--color-mint)]/10 px-1 text-[#7ce8c9]">
      {children}
    </span>
  );
}

export function EmbedCodeCard() {
  return (
    <div className="relative w-full max-w-md rounded-xl bg-slate-950 p-2 shadow-xl">
      <div className="relative flex text-center">
        <div className="flex gap-1.5 pl-3 pt-3">
          <span className="h-3 w-3 rounded-full bg-red-500/40" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/40" />
          <span className="h-3 w-3 rounded-full bg-green-500/40" />
        </div>
        <span className="absolute inset-x-0 top-2 text-[11px] text-slate-500">embed.html</span>
      </div>

      <div className="mt-5 space-y-1 px-5 pb-6 font-mono text-[11.5px] leading-5 tracking-wide">
        <p>
          <Punct>&lt;</Punct>
          <Tag>iframe</Tag>
        </p>
        <p className="ml-4">
          <Attr>src</Attr>
          <Punct>=</Punct>
          <Val>&quot;https://app.onespec.it/w/tuo-configuratore&quot;</Val>
        </p>
        <p className="ml-4">
          <Attr>width</Attr>
          <Punct>=</Punct>
          <Val>&quot;100%&quot;</Val>
        </p>
        <p className="ml-4">
          <Attr>height</Attr>
          <Punct>=</Punct>
          <Val>&quot;720&quot;</Val>
        </p>
        <p className="ml-4">
          <Attr>loading</Attr>
          <Punct>=</Punct>
          <Val>&quot;lazy&quot;</Val>
        </p>
        <p className="ml-4">
          <Attr>style</Attr>
          <Punct>=</Punct>
          <Val>&quot;border:0;&quot;</Val>
        </p>
        <p>
          <Punct>&gt;&lt;/</Punct>
          <Tag>iframe</Tag>
          <Punct>&gt;</Punct>
        </p>
      </div>
    </div>
  );
}
