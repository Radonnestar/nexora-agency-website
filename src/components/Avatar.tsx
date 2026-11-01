export type AvatarLook = {
  skin: string
  hair: string
  shirt: string
  style: 'long' | 'short' | 'bun' | 'curly'
  beard?: boolean
  glasses?: boolean
}

/* A friendly illustrated face, drawn from scratch on a 96 x 96 canvas. */
export default function Avatar({ skin, hair, shirt, style, beard, glasses }: AvatarLook) {
  return (
    <svg viewBox="0 0 96 96" className="block h-full w-full" aria-hidden="true">
      {/* hair behind the head */}
      {style === 'long' && (
        <path d="M26 46 C22 18 40 10 48 10 C58 10 76 18 70 46 L73 80 C60 85 36 85 23 80Z" fill={hair} />
      )}
      {style === 'bun' && <circle cx="48" cy="13" r="9" fill={hair} />}

      {/* shoulders and neck */}
      <path d="M8 96 C8 74 28 68 48 68 C68 68 88 74 88 96Z" fill={shirt} />
      <rect x="41" y="54" width="14" height="18" rx="6" fill={skin} />
      <rect x="41" y="54" width="14" height="18" rx="6" fill="#000" fillOpacity="0.1" />
      <path d="M39 69 L48 81 L57 69" fill="none" stroke="#fff" strokeOpacity="0.55" strokeWidth="2" strokeLinejoin="round" />

      {/* ears and head */}
      <circle cx="29" cy="45" r="4.5" fill={skin} />
      <circle cx="67" cy="45" r="4.5" fill={skin} />
      <ellipse cx="48" cy="42" rx="19" ry="22" fill={skin} />

      {/* beard */}
      {beard && (
        <path
          d="M29 46 C29 66 40 73 48 73 C56 73 67 66 67 46 C62 57 56 59 48 59 C40 59 34 57 29 46Z"
          fill={hair}
        />
      )}

      {/* hair on top */}
      {style === 'long' && (
        <path d="M28 40 C26 22 38 15 48 15 C60 15 71 23 68 40 C63 31 56 26 48 26 C40 26 33 31 28 40Z" fill={hair} />
      )}
      {style === 'short' && (
        <path d="M28 40 C25 20 40 13 50 14 C63 15 71 24 68 40 C66 32 60 25 48 25 C38 25 31 31 28 40Z" fill={hair} />
      )}
      {style === 'bun' && (
        <path d="M28 40 C26 22 38 15 48 15 C60 15 71 23 68 40 C63 31 56 26 48 26 C40 26 33 31 28 40Z" fill={hair} />
      )}
      {style === 'curly' && (
        <g fill={hair}>
          <circle cx="32" cy="30" r="8" />
          <circle cx="41" cy="21" r="9" />
          <circle cx="52" cy="18" r="9" />
          <circle cx="62" cy="22" r="9" />
          <circle cx="68" cy="32" r="7" />
        </g>
      )}

      {/* face */}
      <circle cx="40" cy="44" r="2.3" fill="#1e293b" />
      <circle cx="56" cy="44" r="2.3" fill="#1e293b" />
      <path d="M36 38 Q40 36 44 38 M52 38 Q56 36 60 38" fill="none" stroke={hair} strokeWidth="2" strokeLinecap="round" />
      <circle cx="35" cy="51" r="3.5" fill="#f87171" fillOpacity="0.28" />
      <circle cx="61" cy="51" r="3.5" fill="#f87171" fillOpacity="0.28" />
      <path
        d="M41 53 Q48 59 55 53"
        fill="none"
        stroke={beard ? '#fff' : '#7c2d12'}
        strokeWidth="2"
        strokeLinecap="round"
      />

      {glasses && (
        <g fill="#fff" fillOpacity="0.12" stroke="#0f172a" strokeWidth="2">
          <circle cx="40" cy="44" r="7.5" />
          <circle cx="56" cy="44" r="7.5" />
          <path d="M47.5 44 H48.5" />
        </g>
      )}
    </svg>
  )
}