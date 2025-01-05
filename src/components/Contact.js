// Contact.js
export default function Contact() {
    return (
        <section id="contact"
                 className="my-40 align-center max-w-5xl mx-auto p-3">
            <h2 className="text-5xl font-bold text-emerald-500 text-center">
                Contato
            </h2>
            <div className="flex gap-5 justify-center 
                        my-10">
                <a rel="noreferrer"
                   target="_blank"
                   className="text-center hover:underline"
                   href=
                  "https://instagram.com/dalbertolavo">
                    Instagram:
                    <span className="font-bold">
                        @dalbertolavo
                    </span>
                </a>
                <a rel="noreferrer"
                   target="_blank"
                   className="text-center hover:underline"
                   href=
                   "https://www.linkedin.com/in/olavo-defendi-dalberto-050144235">
                    Linkedin:
                    <span className="font-bold">
                        Olavo Defendi Dalberto
                    </span>
                </a>
                <a rel="noreferrer"
                   target="_blank"
                   className="text-center hover:underline"
                   href=
                   "https://github.com/olavodd42">
                    Github:
                    <span className="font-bold">
                        @olavodd42
                    </span>
                </a>
                <a rel="noreferrer"
                   target="_blank"
                   className="text-center hover:underline"
                   href=
                   "https://www.facebook.com/OlavoDDalberto/">
                    Facebook:
                    <span className="font-bold">
                        Olavo Dalberto
                    </span>
                </a>
            </div>
        </section>
    );
}
