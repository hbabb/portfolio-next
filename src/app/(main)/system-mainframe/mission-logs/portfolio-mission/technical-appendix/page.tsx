import Image from "next/image";
import ThemeColors from "@/assets/images/ThemeColors.png";
export default function PortfolioDocumentation() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-2 w-full">
      <main className="flex flex-col items-center justify-center p-8 rounded-lg backdrop-blur-md bg-lcars-black border-4 border-lcars-lilac shadow-lg text-sm w-full">
        <div className="w-full">
          <h1 className="text-4xl font-lcars-bold mb-6 text-lcars-gold underline text-center">
            Technical Documentation
          </h1>
          
          <div className="text-lcars-violetCreme font-lcars space-y-8 text-justify">
            <section>
              <h2 className="text-2xl font-lcars-bold text-lcars-amber mb-4">Development Environment</h2>
              <div className="bg-lcars-black/50 p-4 rounded-lg border-2 border-lcars-tngC60">
                <h3 className="text-lcars-red text-lg mb-2">Initial Setup</h3>
                <code className="text-sm font-code block mb-4 text-lcars-tngC61">
                  git clone https://github.com/hbabb/portfolio-next.git<br/>
                  pnpm install<br/>
                  pnpm run dev
                </code>
                <h3 className="text-lcars-red text-lg mb-2">Environment Variables</h3>
                <code className="text-sm font-code block text-lcars-tngC61">
                  DATABASE_URL=your_neon_db_url<br/>
                  NEXT_PUBLIC_BASE_URL=http://localhost:3000<br/>
                  NEXT_PUBLIC_VERCEL_URL=your_production_url
                </code>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-lcars-bold text-lcars-sunflower mb-4">Architecture Overview</h2>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lcars-text mb-2">Frontend Architecture</h4>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>Next.js App Router for optimized routing and rendering</li>
                    <li>React Server Components for improved performance</li>
                    <li>Tailwind CSS with custom LCARS-inspired design system</li>
                    <li>Custom hooks for animation and state management</li>
                    <li>Responsive layout system using CSS Grid and Flexbox</li>
                  </ul>
                </div>
                
                <div className="mt-4">
                  <h4 className="text-lcars-text mb-2">Performance Optimizations</h4>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>Image optimization using Next.js Image component</li>
                    <li>Code splitting and lazy loading</li>
                    <li>Static page generation where possible</li>
                    <li>Optimized fonts and assets</li>
                    <li>Efficient state management</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-lcars-bold text-lcars-sunflower mb-4">Component Structure</h2>
              <div className="bg-lcars-black/50 p-4 rounded-lg border-2 border-lcars-tngC60">
                <pre className="text-sm text-lcars-orange font-code">
                  src/<br/>
                  ├── components/<br/>
                  │   ├── animations/<br/>
                  │   │   ├── MatrixRain.tsx<br/>
                  │   │   └── transitions/<br/>
                  │   ├── layout/<br/>
                  │   │   ├── Header.tsx<br/>
                  │   │   ├── Navigation.tsx<br/>
                  │   │   └── Footer.tsx<br/>
                  │   └── ui/<br/>
                  │       ├── Button.tsx<br/>
                  │       └── Card.tsx<br/>
                  └── styles/<br/>
                      └── globals.css
                </pre>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-lcars-bold text-lcars-sunflower mb-4">Design System</h2>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lcars-text text-lg mb-2">Color Palette</h4>
                  <p className="mb-2">LCARS COLOR PALETTE:</p>
                  {/* Add color palette */}
                  <div>
                    <Image
                      src={ThemeColors}
                      alt="Theme Color Palette"
                      // width={500}
                      // height={500}
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="text-lcars-text text-lg mb-2">Typography</h4>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li className="font-lcars-bold">Primary Font: Antonio Bold</li>
                    <li className="font-lcars">Secondary Font: Antonio Regular</li>
                    <li className="font-code">Monospace: Fira Code (code blocks)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-lcars-bold text-lcars-sunflower mb-4">Deployment</h2>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Vercel for production hosting</li>
                <li>GitHub Actions for CI/CD pipeline</li>
                <li>Automatic preview deployments</li>
                <li>Performance monitoring</li>
                <li>Error tracking and logging</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}