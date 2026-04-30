import { useLocation } from 'react-router-dom';

const PHONE = '27829672060';

const PAGE_MESSAGES: Record<string, string> = {
    '/': 'Hi, I would like to get more information on your holiday packages. Can you help me?',
    '/thailand': 'Hi, can I get more information on your Thailand packages?',
    '/mauritius': 'Hi, can I get more information on your Mauritius packages?',
    '/zanzibar': 'Hi, can I get more information on your Zanzibar packages?',
    '/maldives': 'Hi, can I get more information on your Maldives packages?',
    '/contact': 'Hi, I would like to get in touch with the Izi Travel team. Can you assist me?',
    '/packages/bangkok-phuket': "Hi, I'm interested in the Bangkok & Phuket package. Can I get more details?",
    '/packages/romantic-zanzibar': "Hi, I'm interested in the Romantic Zanzibar package. Can I get more details?",
    '/packages/mauritius-family': "Hi, I'm interested in the Mauritius Family Holiday package. Can I get more details?",
    '/packages/maldives-overwater': "Hi, I'm interested in the Maldives Overwater Escape package. Can I get more details?",
};

const DEFAULT_MESSAGE = 'Hi, I would like to get more information on your holiday packages. Can you help me?';

export default function WhatsAppButton() {
    const location = useLocation();

    const handleClick = () => {
        const pathname = location.pathname;
        const message = PAGE_MESSAGES[pathname] ?? DEFAULT_MESSAGE;
        const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <button
            onClick={handleClick}
            aria-label="Chat on WhatsApp"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-transform hover:scale-110 active:scale-95 cursor-pointer"
            style={{ backgroundColor: '#25D366' }}
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-8 h-8 fill-white">
                <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.471 2.027 7.773L0 32l8.489-2.001A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.267 13.267 0 0 1-6.758-1.846l-.485-.287-5.037 1.187 1.23-4.893-.317-.502A13.233 13.233 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.274-9.878c-.398-.199-2.355-1.162-2.72-1.294-.366-.133-.632-.199-.898.199-.265.398-1.03 1.294-1.263 1.56-.232.265-.465.298-.863.1-.398-.199-1.681-.619-3.202-1.977-1.183-1.057-1.981-2.362-2.213-2.76-.232-.398-.025-.613.175-.811.179-.178.398-.465.598-.697.199-.232.265-.398.398-.664.133-.265.066-.498-.033-.697-.1-.199-.898-2.165-1.23-2.963-.324-.778-.653-.673-.898-.685l-.765-.013c-.265 0-.697.1-1.063.498-.366.398-1.395 1.362-1.395 3.322 0 1.96 1.428 3.854 1.627 4.12.199.265 2.81 4.29 6.808 6.016.952.411 1.695.657 2.274.841.955.304 1.824.261 2.511.158.766-.114 2.355-.963 2.688-1.893.332-.93.332-1.727.232-1.893-.099-.166-.365-.265-.763-.464z" />
            </svg>
        </button>
    );
}
