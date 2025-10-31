import Image from 'next/image';

export default function TrustedBy() {
  const logos = [
    { name: 'Swoop Funding', src: '/swoop-funding.png' },
    { name: 'Lunos', src: '/lunos.png' },
    { name: 'KFacial', src: '/k-facial.png' },
    { name: 'OIF', src: '/oif.png' },
    { name: 'The Bliss Group', src: '/the-bliss-group.png' }
  ];

  return (
    <div className="w-full py-10 sm:py-12">
      <div className="max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center mb-5 sm:mb-7">
          <h3 className="text-sm sm:text-base md:text-lg font-bold tracking-wider text-slate-600 uppercase">Trusted and Supported by</h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 sm:gap-7 items-center">
          {logos.map((logo) => {
            const isWideLogo = logo.name === 'KFacial' || logo.name === 'OIF' || logo.name === 'The Bliss Group';
            const boxClass = isWideLogo
              ? 'w-28 h-10 sm:w-32 sm:h-12 md:w-36 md:h-14'
              : 'w-24 h-8 sm:w-28 sm:h-10 md:w-32 md:h-12';
            return (
            <div key={logo.name} className="flex items-center justify-center">
              <div className={`relative ${boxClass} opacity-80 hover:opacity-100 transition-opacity`}>
                <Image
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  fill
                  className="object-contain transition-all"
                />
              </div>
            </div>
          );})}
        </div>
      </div>
    </div>
  );
}


