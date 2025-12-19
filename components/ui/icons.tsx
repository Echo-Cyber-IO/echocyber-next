/**
 * CUSTOM SVG ICONS
 *
 * These are the custom icons used throughout the site.
 * Heroicons are imported directly where needed, but these are custom.
 */

// Tune tier icon - dial/knob
export function TuneIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
    >
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
      <line x1="12" y1="4" x2="12" y2="1" />
      <line x1="12" y1="23" x2="12" y2="20" />
      <line x1="4" y1="12" x2="1" y2="12" />
      <line x1="23" y1="12" x2="20" y2="12" />
      <line x1="6.34" y1="6.34" x2="4.22" y2="4.22" />
      <line x1="19.78" y1="19.78" x2="17.66" y2="17.66" />
      <line x1="6.34" y1="17.66" x2="4.22" y2="19.78" />
      <line x1="19.78" y1="4.22" x2="17.66" y2="6.34" />
    </svg>
  );
}

// Signal tier icon - broadcast waves
export function SignalIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" />
      <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" />
      <circle cx="12" cy="12" r="2" />
      <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" />
      <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19" />
    </svg>
  );
}

// Echo tier icon - pulse/ripple
export function EchoIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
    >
      <circle cx="12" cy="12" r="3" />
      <circle cx="12" cy="12" r="6" opacity="0.7" />
      <circle cx="12" cy="12" r="9" opacity="0.4" />
    </svg>
  );
}

// Circuit decoration - complex SVG from hero section
export function CircuitDecoration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Main circuit paths */}
      <path
        d="M50 200 L150 200 L150 100 L250 100"
        stroke="currentColor"
        strokeWidth="2"
        className="text-crimson-600"
      />
      <path
        d="M250 100 L250 150 L350 150"
        stroke="currentColor"
        strokeWidth="2"
        className="text-crimson-600"
      />
      <path
        d="M100 250 L100 300 L200 300 L200 350"
        stroke="currentColor"
        strokeWidth="2"
        className="text-echo-600"
      />
      <path
        d="M300 200 L300 250 L350 250"
        stroke="currentColor"
        strokeWidth="2"
        className="text-echo-600"
      />
      <path
        d="M50 100 L100 100 L100 150"
        stroke="currentColor"
        strokeWidth="2"
        className="text-crimson-500"
      />
      <path
        d="M200 50 L200 100"
        stroke="currentColor"
        strokeWidth="2"
        className="text-crimson-500"
      />
      <path
        d="M250 250 L250 300 L300 300"
        stroke="currentColor"
        strokeWidth="2"
        className="text-echo-500"
      />

      {/* Circuit nodes */}
      <circle cx="150" cy="200" r="4" className="fill-crimson-500" />
      <circle cx="250" cy="100" r="4" className="fill-crimson-500" />
      <circle cx="100" cy="300" r="4" className="fill-echo-500" />
      <circle cx="300" cy="200" r="4" className="fill-echo-500" />
      <circle cx="150" cy="100" r="3" className="fill-crimson-600" />
      <circle cx="350" cy="150" r="3" className="fill-crimson-600" />
      <circle cx="200" cy="350" r="3" className="fill-echo-600" />
      <circle cx="350" cy="250" r="3" className="fill-echo-600" />
      <circle cx="100" cy="100" r="3" className="fill-crimson-400" />
      <circle cx="200" cy="50" r="3" className="fill-crimson-400" />
      <circle cx="300" cy="300" r="3" className="fill-echo-400" />

      {/* Decorative elements */}
      <rect
        x="95"
        y="145"
        width="10"
        height="10"
        className="fill-crimson-600"
        opacity="0.5"
      />
      <rect
        x="295"
        y="245"
        width="10"
        height="10"
        className="fill-echo-600"
        opacity="0.5"
      />
      <rect
        x="195"
        y="295"
        width="10"
        height="10"
        className="fill-echo-500"
        opacity="0.5"
      />

      {/* Additional paths for complexity */}
      <path
        d="M150 150 L200 150 L200 200"
        stroke="currentColor"
        strokeWidth="1"
        className="text-crimson-400"
        opacity="0.6"
      />
      <path
        d="M250 200 L300 200"
        stroke="currentColor"
        strokeWidth="1"
        className="text-echo-400"
        opacity="0.6"
      />
    </svg>
  );
}

// Hero circuit decoration - hexagon cluster with traces (original site design)
export function HeroCircuit({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 700" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Main central hexagon cluster */}
      <path d="M300 200 L380 246 L380 338 L300 384 L220 338 L220 246 Z" stroke="#CC3333" strokeWidth="2" fill="none"/>
      <path d="M300 220 L360 254 L360 322 L300 356 L240 322 L240 254 Z" stroke="#CC3333" strokeWidth="1.5" fill="none" opacity={0.7}/>
      <path d="M300 245 L340 267 L340 313 L300 335 L260 313 L260 267 Z" stroke="#990000" strokeWidth="1.5" fill="#990000" fillOpacity={0.15}/>

      {/* Circuit traces - Top */}
      <line x1="300" y1="200" x2="300" y2="120" stroke="#CC3333" strokeWidth="2"/>
      <line x1="300" y1="120" x2="380" y2="80" stroke="#CC3333" strokeWidth="2"/>
      <circle cx="385" cy="77" r="5" fill="#CC3333"/>

      {/* Top branch */}
      <line x1="300" y1="150" x2="220" y2="100" stroke="#990000" strokeWidth="1.5"/>
      <line x1="220" y1="100" x2="220" y2="50" stroke="#990000" strokeWidth="1.5"/>
      <circle cx="220" cy="45" r="4" fill="#990000"/>

      {/* Upper right */}
      <line x1="380" y1="246" x2="450" y2="210" stroke="#CC3333" strokeWidth="2"/>
      <line x1="450" y1="210" x2="520" y2="210" stroke="#CC3333" strokeWidth="2"/>
      <circle cx="528" cy="210" r="5" fill="#CC3333"/>

      {/* Right side */}
      <line x1="380" y1="292" x2="480" y2="292" stroke="#990000" strokeWidth="1.5"/>
      <line x1="480" y1="292" x2="480" y2="350" stroke="#990000" strokeWidth="1.5"/>
      <circle cx="480" cy="358" r="4" fill="#990000"/>

      {/* Lower right */}
      <line x1="380" y1="338" x2="440" y2="380" stroke="#CC3333" strokeWidth="2"/>
      <line x1="440" y1="380" x2="440" y2="450" stroke="#CC3333" strokeWidth="2"/>
      <circle cx="440" cy="458" r="5" fill="#CC3333"/>

      {/* Bottom */}
      <line x1="300" y1="384" x2="300" y2="480" stroke="#CC3333" strokeWidth="2"/>
      <line x1="300" y1="480" x2="200" y2="530" stroke="#CC3333" strokeWidth="2"/>
      <circle cx="193" cy="534" r="5" fill="#CC3333"/>

      {/* Lower left */}
      <line x1="220" y1="338" x2="150" y2="380" stroke="#990000" strokeWidth="1.5"/>
      <line x1="150" y1="380" x2="150" y2="320" stroke="#990000" strokeWidth="1.5"/>
      <circle cx="150" cy="312" r="4" fill="#990000"/>

      {/* Left side */}
      <line x1="220" y1="292" x2="120" y2="292" stroke="#CC3333" strokeWidth="2"/>
      <line x1="120" y1="292" x2="80" y2="250" stroke="#CC3333" strokeWidth="2"/>
      <circle cx="75" cy="245" r="5" fill="#CC3333"/>

      {/* Secondary hexagon - upper right */}
      <path d="M480 100 L530 130 L530 190 L480 220 L430 190 L430 130 Z" stroke="#CC3333" strokeWidth="1.5" fill="none" opacity={0.5}/>
      <line x1="530" y1="160" x2="580" y2="160" stroke="#CC3333" strokeWidth="1.5" opacity={0.5}/>
      <circle cx="588" cy="160" r="4" fill="#CC3333" opacity={0.5}/>
      <line x1="480" y1="100" x2="480" y2="60" stroke="#CC3333" strokeWidth="1.5" opacity={0.5}/>
      <circle cx="480" cy="52" r="4" fill="#CC3333" opacity={0.5}/>

      {/* Secondary hexagon - lower right */}
      <path d="M500 420 L540 445 L540 495 L500 520 L460 495 L460 445 Z" stroke="#990000" strokeWidth="1" fill="none" opacity={0.4}/>
      <line x1="540" y1="470" x2="590" y2="470" stroke="#990000" strokeWidth="1" opacity={0.4}/>
      <circle cx="596" cy="470" r="3" fill="#990000" opacity={0.4}/>

      {/* Secondary hexagon - upper left */}
      <path d="M120 80 L160 105 L160 155 L120 180 L80 155 L80 105 Z" stroke="#CC3333" strokeWidth="1" fill="none" opacity={0.35}/>
      <line x1="80" y1="130" x2="30" y2="130" stroke="#CC3333" strokeWidth="1" opacity={0.35}/>
      <circle cx="22" cy="130" r="3" fill="#CC3333" opacity={0.35}/>

      {/* Secondary hexagon - lower */}
      <path d="M180 580 L220 605 L220 655 L180 680 L140 655 L140 605 Z" stroke="#990000" strokeWidth="1" fill="none" opacity={0.3}/>
      <line x1="220" y1="630" x2="270" y2="630" stroke="#990000" strokeWidth="1" opacity={0.3}/>

      {/* Connecting traces */}
      <line x1="430" y1="160" x2="385" y2="200" stroke="#990000" strokeWidth="1" opacity={0.4}/>
      <line x1="460" y1="445" x2="400" y2="400" stroke="#990000" strokeWidth="1" opacity={0.3}/>

      {/* Floating accent nodes */}
      <circle cx="550" cy="300" r="3" fill="#CC3333" opacity={0.4}/>
      <circle cx="570" cy="380" r="2" fill="#990000" opacity={0.3}/>
      <circle cx="50" cy="200" r="3" fill="#CC3333" opacity={0.35}/>
      <circle cx="30" cy="350" r="2" fill="#990000" opacity={0.3}/>
      <circle cx="350" cy="550" r="3" fill="#CC3333" opacity={0.3}/>
      <circle cx="100" cy="450" r="2" fill="#990000" opacity={0.25}/>
      <circle cx="550" cy="80" r="2" fill="#CC3333" opacity={0.3}/>
      <circle cx="400" cy="600" r="2" fill="#990000" opacity={0.2}/>
    </svg>
  );
}
