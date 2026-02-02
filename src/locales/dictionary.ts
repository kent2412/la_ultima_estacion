export interface Dictionary {
    en: {
        navbar: {
            home: string;
            shortFilm: string;
            history: string;
            crew: string;
            cast: string;
            press: string;
            screenings: string;
            shop: string;
            contest: string;
            testimony: string;
        };
        contact: {
            title: string;
            supportTitle: string;
            supportText: string;
            supportButton: string;
        };
        hero: {
            title: string;
        };
        trailer: {
            title: string;
            subtitle: string;
        };
        nextStop: {
            title: string;
            stories: string;
            screenings: string;
        };
        about: {
            title: string;
            description: string;
        };
        history: {
            inspirationTitle: string;
            inspirationText: string;
            visionTitle: string;
            historyTitle: string;
            historyText: string;
            visionText: string;
            galleryTitle: string;
            bloopersTitle: string;
            invisibleReality: {
                title: string;
                stats: { value: string; label: string; }[];
                text: string;
            };
        };
        anthology: {
            title: string;
            text: string;
            button: string;
            bookTitle: string;
        };
        pages: {
            bitacora: {
                title: string;
                introTitle: string;
                podcastSection: {
                    intro: string;
                    questions: string[];
                    outro: string;
                    details: { label: string; value: string; }[];
                };
                instructions: {
                    shareTitle: string;
                    shareIntro: string;
                    seekingTitle: string;
                    seeking: string[];
                    formatTitle: string;
                    format: string[];
                    email: string;
                    emailNote: string;
                    techTitle: string;
                    videoTitle: string;
                    video: string[];
                    audioTitle: string;
                    audio: string[];
                    contentTitle: string;
                    content: string[];
                    privacyTitle: string;
                    privacy: string[];
                };
            };
            cast: {
                title: string;
                intro: string;
            };
            press: {
                title: string;
                contactInfoTitle: string; // "Contact Information"
                pressMediaLabel: string; // "Press and Media"
                email: string;
                phoneLabel: string; // "Phone"
                phone: string;
                producerLabel: string; // "Executive Producer"
                producerName: string;
                producerEmail: string;
                contactAddress: string;

                dossierTitle: string; // "Electronic Press Kit (EPK)"
                epkAvailable: string; // "Available: February 2026"
                dossierText: string;
                epkIncludes: string[]; // List of items

                buttons: { pdf: string; flyer: string; poster: string; };

                notesTitle: string; // "Press Notes and Articles"
                notesText: string; // "This section will be updated..."
            };
            screenings: {
                title: string;
                button: string;
                upcomingTitle: string;
                forumsTitle: string;
                pastTitle: string;
                eventButton: string;
                viewMore: string;
                privateScreening: {
                    title: string;
                    description: string;
                    emailPrompt: string;
                    fieldsTitle: string; // Not explicitly requested but useful wrapper if needed, actually user just listed fields. I will make fields a list of strings for simplicity or an object if labels are needed.
                    // User provided a list: Organization name, Contact person, etc.
                    // Let's make it a list of label strings for the email body recommendation.
                    fields: string[];
                    email: string; // The email address
                };
            };
            history: {
                title: string;
            };
            crew: {
                title: string;
                intro: string;
            };
            contest: {
                title: string;
                openCallTitle: string;
                openCallText: string;
                scheduleTitle: string;
                schedule: { date: string; event: string; }[];
                rulesTitle: string;
                rules: {
                    participantsTitle: string;
                    participants: string[];
                    themeTitle: string;
                    theme: string;
                    formatTitle: string;
                    format: string[];
                    submissionTitle: string;
                    submission: string[];
                };
                prizesLabel: string;
                prizesList: { first: string; second: string; third: string; final: string; video: string; };
                copyrightTitle: string;
                copyrightText: string;
                finalistsAnnouncement: string;
                form: {
                    instructions: string;
                    namePlaceholder: string;
                    emailPlaceholder: string;
                    phonePlaceholder: string;
                    uploadLabel: string;
                    submitButton: string;
                };
            };
            shop: {
                title: string;
                subtitle: string;
                firstItemsTitle: string;
                firstItems: { title: string; desc: string; }[];


                productsGridTitle: string; // "Products" (implicit or explicit)
                placeholderProducts: { title: string; desc: string; price: string; button: string; img: string; }[];

                gearUpTitle: string;
                gearUpSubtitle: string;

                featuredResources: { title: string; button: string; img: string; }[];

                library: {
                    title: string;
                    subtitle: string;
                    intro: string;

                    categories: {
                        support: {
                            title: string;
                            items: { name: string; desc: string; link?: string; phone?: string; }[];
                        };
                        legal: {
                            title: string;
                            items: { name: string; desc: string; link?: string; phone?: string; }[];
                        };
                        community: {
                            title: string;
                            items: { name: string; desc: string; link?: string; phone?: string; }[];
                        };
                        literature: {
                            title: string;
                            items: { name: string; desc: string; link?: string; author?: string; }[];
                        };
                        podcasts: {
                            title: string;
                            items: { name: string; desc: string; link?: string; platform?: string; }[];
                        };
                        apps: {
                            title: string;
                            items: { name: string; desc: string; }[];
                        };
                    };
                };
                disclaimer: string;
            };
        };
        // Mock Data Section
        data: {
            cast: { name: string; role: string; bio: string; img: string; }[];
            crew: { name: string; role: string; bio: string; img: string; }[];
            events: { date: string; time: string; location: string; description: string; category: "upcoming" | "forums"; }[];
            pastEvents: { title: string; date: string; }[];
            products: { title: string; description: string; }[];
            bloopers: { title: string; }[];
            jury: { name: string; role: string; bio: string; img: string; }[];
        };
    };
    es: {
        navbar: {
            home: string;
            shortFilm: string;
            history: string;
            crew: string;
            cast: string;
            press: string;
            screenings: string;
            shop: string;
            contest: string;
            testimony: string;
        };
        contact: {
            title: string;
            supportTitle: string;
            supportText: string;
            supportButton: string;
        };
        hero: {
            title: string;
        };
        trailer: {
            title: string;
            subtitle: string;
        };
        nextStop: {
            title: string;
            stories: string;
            screenings: string;
        };
        about: {
            title: string;
            description: string;
        };
        history: {
            inspirationTitle: string;
            inspirationText: string;
            historyTitle: string;
            historyText: string;
            visionTitle: string;
            visionText: string;
            galleryTitle: string;
            bloopersTitle: string;
            invisibleReality: {
                title: string;
                stats: { value: string; label: string; }[];
                text: string;
            };
        };
        anthology: {
            title: string;
            text: string;
            button: string;
            bookTitle: string;
        };
        pages: {
            bitacora: {
                title: string;
                introTitle: string;
                podcastSection: {
                    intro: string;
                    questions: string[];
                    outro: string;
                    details: { label: string; value: string; }[];
                };
                instructions: {
                    shareTitle: string;
                    shareIntro: string;
                    seekingTitle: string;
                    seeking: string[];
                    formatTitle: string;
                    format: string[];
                    email: string;
                    emailNote: string;
                    techTitle: string;
                    videoTitle: string;
                    video: string[];
                    audioTitle: string;
                    audio: string[];
                    contentTitle: string;
                    content: string[];
                    privacyTitle: string;
                    privacy: string[];
                };
            };
            cast: {
                title: string;
                intro: string;
            };
            press: {
                title: string;
                contactInfoTitle: string;
                pressMediaLabel: string;
                email: string;
                phoneLabel: string;
                phone: string;
                producerLabel: string;
                producerName: string;
                producerEmail: string;
                contactAddress: string;

                dossierTitle: string;
                epkAvailable: string;
                dossierText: string;
                epkIncludes: string[];

                buttons: { pdf: string; flyer: string; poster: string; };

                notesTitle: string;
                notesText: string;
            };
            screenings: {
                title: string;
                button: string;
                upcomingTitle: string;
                forumsTitle: string;
                pastTitle: string;
                eventButton: string;
                viewMore: string;
                privateScreening: {
                    title: string;
                    description: string;
                    emailPrompt: string;
                    fieldsTitle: string;
                    fields: string[];
                    email: string;
                };
            };
            history: {
                title: string;
            };
            crew: {
                title: string;
                intro: string;
            };
            contest: {
                title: string;
                openCallTitle: string;
                openCallText: string;
                scheduleTitle: string;
                schedule: { date: string; event: string; }[];
                rulesTitle: string;
                rules: {
                    participantsTitle: string;
                    participants: string[];
                    themeTitle: string;
                    theme: string;
                    formatTitle: string;
                    format: string[];
                    submissionTitle: string;
                    submission: string[];
                };
                prizesLabel: string;
                prizesList: { first: string; second: string; third: string; final: string; video: string; };
                copyrightTitle: string;
                copyrightText: string;
                finalistsAnnouncement: string;
                form: {
                    instructions: string;
                    namePlaceholder: string;
                    emailPlaceholder: string;
                    phonePlaceholder: string;
                    uploadLabel: string;
                    submitButton: string;
                };
            };
            shop: {
                title: string;
                subtitle: string;
                firstItemsTitle: string;
                firstItems: { title: string; desc: string; }[];


                productsGridTitle: string;
                placeholderProducts: { title: string; desc: string; price: string; button: string; img: string; }[];

                gearUpTitle: string;
                gearUpSubtitle: string;

                featuredResources: { title: string; button: string; img: string; }[];

                library: {
                    title: string;
                    subtitle: string;
                    intro: string;

                    categories: {
                        support: {
                            title: string;
                            items: { name: string; desc: string; link?: string; phone?: string; }[];
                        };
                        legal: {
                            title: string;
                            items: { name: string; desc: string; link?: string; phone?: string; }[];
                        };
                        community: {
                            title: string;
                            items: { name: string; desc: string; link?: string; phone?: string; }[];
                        };
                        literature: {
                            title: string;
                            items: { name: string; desc: string; link?: string; author?: string; }[];
                        };
                        podcasts: {
                            title: string;
                            items: { name: string; desc: string; link?: string; platform?: string; }[];
                        };
                        apps: {
                            title: string;
                            items: { name: string; desc: string; }[];
                        };
                    };
                };
                disclaimer: string;
            };
        };
        data: {
            cast: { name: string; role: string; bio: string; img: string; }[];
            crew: { name: string; role: string; bio: string; img: string; }[];
            events: { date: string; time: string; location: string; description: string; category: "upcoming" | "forums"; }[];
            pastEvents: { title: string; date: string; }[];
            products: { title: string; description: string; }[];
            bloopers: { title: string; }[];
            jury: { name: string; role: string; bio: string; img: string; }[];
        };
    };
}

export const dictionary: Dictionary = {
    en: {
        navbar: {
            home: "Home",
            shortFilm: "Short Film",
            history: "History",
            crew: "Crew",
            cast: "Cast",
            press: "Press",
            screenings: "Screenings",
            shop: "Shop",
            contest: "Contest",
            testimony: "Testimonies",
        },
        contact: {
            title: "Contact",
            supportTitle: "Support this project",
            supportText: "Your support brings forgotten stories to life and takes this history to festivals.",
            supportButton: "SUPPORT\nTHIS\nJOURNEY",
        },
        hero: {
            title: "The Journey",
        },
        trailer: {
            title: "Teaser",
            subtitle: "The Last Station",
        },
        nextStop: {
            title: "Next Stop",
            stories: "Our Journey",
            screenings: "VIP Passengers",
        },
        about: {
            title: "This journey begins with you",
            description: "There are journeys not measured in miles, but in what we leave behind and what we finally dare to let go.\n\nJessica Morales boards a train carrying the last remnants of a love that exhausted her. What begins as a journey to the coast becomes a discovery: she was not the first to disappear for him.\n\nThrough an interwoven narrative, the short film The Last Station reveals the silent truth of the caregiver: that love hurts, that exhaustion is not guilty, and that healing is also a form of love.\n\nProduction: January 2026 | Miami, Florida",
        },
        history: {
            inspirationTitle: "Jackie Zambrano, Screenwriter and Producer",
            inspirationText: `“La Última Estación (The Last Station) is a love letter to all invisible caregivers who sacrifice their identity, their dreams, and their health for love. It is a reminder that caregiver grief begins long before physical loss and that healing requires recognizing both the pain and the love that caused it.\n\nThis story honors the silent strength of those who care, the human connection that transcends time, and the transformative power of sharing our most vulnerable experiences.”`,
            historyTitle: "The History",
            historyText: "After eight years caring for her ill husband, Jessica Morales boards a train with her past in a suitcase and an uncertain future ahead. On this solitary journey, she discovers that the pain of the caregiver transcends time and people, and that her invisibility is not an accident — it is systemic.\n\nLa Última Estación (The Last Station) is a lyrical meditation on the 63 million family caregivers in the United States — mostly women, mostly invisible — who sustain other people’s lives while their own fade into the background.",
            visionTitle: "Director's Vision - Eduardo Pardo",
            visionText: "The Last Station embraces the complexity of love and loss without gratuitous drama. Jessica, Annie, and John represent a temporal triangle where care is transmitted from woman to woman across time.\n\nThe train is a mobile confessional. Each station marks a stage of grief; each tunnel, an immersion in shared memory. The rhythm of the clack-clack on the rails marks Jessica's rebirth.\n\nVisually, the emotional palette evolves with her arc: from cold blues to warm golds. Annie's diary functions as a temporal bridge. The final fire ritual becomes alchemical transformation, not farewell.\n\nThis film breathes, proposes, honors silence as emotional language. With a cast that understands the difference between acting and truth, it will become a universal mirror.\n\nBecause we all inhabit this story without realizing it. And we deserve to see it reflected with dignity.",
            galleryTitle: "Gallery",
            bloopersTitle: "Bloopers",
            invisibleReality: {
                title: "THE INVISIBLE REALITY",
                stats: [
                    { value: "63 million", label: "Unpaid family caregivers in the United States" },
                    { value: "80%", label: "Women who assume the role of primary caregivers" },
                    { value: "$600 billion", label: "Annual economic value of unpaid caregiving work" },
                    { value: "1 in 5", label: "Has experienced impacts on their physical and mental health" },
                ],
                text: "The Last Station makes visible a global reality: the family caregiver is invisible to the system, to society, to the family — even to those who try to protect them. This short film confronts toxic romanticism and toxic positivity that silence exhaustion, guilt, and anticipatory grief of those who love until they disappear.\n\nThis is a work of fiction inspired by conversations held with hundreds of caregivers. It is not therapy. It is cinema that opens the door to an honest, real, uncensored conversation.",
            },
        },
        anthology: {
            title: "Anthology",
            text: "The Platform Stories anthology will gather the 13 selected stories in a publication celebrating the resilience, love, and humanity of caregivers.",
            button: "Publication: June 2026",
            bookTitle: "Platform Stories",
        },
        pages: {
            bitacora: {
                title: "PLATFORM VOICES",
                introTitle: "A podcast about family caregiving without filters",
                podcastSection: {
                    intro: "Family caregiving does not come with an instruction manual. Nor does it come with permission to ask uncomfortable questions:",
                    questions: [
                        "Can I be angry at someone I love?",
                        "Is it normal to wish it would all end?",
                        "How do I reconcile guilt with exhaustion?"
                    ],
                    outro: "Voces del Anden is a space for the conversations that are not held in public. No toxic positivity. No unsolicited advice. Just truth.",
                    details: [
                        { label: "Format:", value: "10 episodes | Season 1" },
                        { label: "Host:", value: "Jackie Zambrano" },
                        { label: "Available on:", value: "YouTube" },
                        { label: "First episode:", value: "March 2026" }
                    ]
                },
                instructions: {
                    shareTitle: "SHARE YOUR VOICE IN VIDEO",
                    shareIntro: "Have you been a caregiver? Do you know someone who carries this story in silence? We invite you to record your testimony and be part of Platform Voices.",
                    seekingTitle: "What are we looking for?",
                    seeking: [
                        "Your experience as a caregiver (or someone close to you)",
                        "What caring meant: what you gained, what you lost, what you learned",
                        "What you needed to hear when you needed it most",
                        "A message for other caregivers who are on the path"
                    ],
                    formatTitle: "Suggested format:",
                    format: [
                        "Duration: 2-5 minutes",
                        "Horizontal or vertical (as you prefer)",
                        "Speak directly to camera or record voice-over",
                        "Language: Spanish or English",
                        "No professional equipment needed—your phone is enough"
                    ],
                    email: "Send your testimony to: testimonios@laultimaestacionfilm.com",
                    emailNote: "(Your story can be anonymous if you prefer. We will edit and publish with your approval.)",
                    techTitle: "TECHNICAL REQUIREMENTS",
                    videoTitle: "For video:",
                    video: [
                        "Format: MP4, MOV or similar",
                        "Good lighting (natural light works perfectly)",
                        "Clear audio (avoid places with lots of echo or background noise)",
                        "Framing: Your face visible and centered (if you choose to show yourself)"
                    ],
                    audioTitle: "For audio/podcast:",
                    audio: [
                        "Format: MP3 or WAV",
                        "Record in a quiet place",
                        "Speak calmly, unhurried"
                    ],
                    contentTitle: "Recommended content:",
                    content: [
                        "Introduce yourself briefly (name, relationship to caregiving)",
                        "Share your story: Who did you care for? For how long?",
                        "Reflect: What did you learn? What did you need to hear?",
                        "Close with a message for other caregivers"
                    ],
                    privacyTitle: "Privacy:",
                    privacy: [
                        "Don't share sensitive medical information without consent",
                        "You can use a pseudonym if you prefer anonymity",
                        "We'll review your video before publishing and ask for authorization"
                    ]
                }
            },
            cast: {
                title: "Passengers",
                intro: "The voices bringing this journey to life. Each actor brings not only their talent but also their own experience with caregiving. Meet the people behind each character.",
            },
            press: {
                title: "Kiosk",

                contactInfoTitle: "Contact Information",
                pressMediaLabel: "Press and Media:",
                email: "prensa@laultimaestacionfilm.com",
                phoneLabel: "Phone:",
                phone: "+1 (518) 512-7243",
                producerLabel: "Executive Producer:",
                producerName: "Jackie Zambrano",
                producerEmail: "jaz@jackiezambrano.com",
                contactAddress: "Miami, FL",

                dossierTitle: "Electronic Press Kit (EPK)",
                epkAvailable: "Available: February 2026",
                dossierText: "Press materials and media coverage. Every story deserves to be told. Find here everything needed to share The Last Station with your audience.\n\nThe press kit will include:",
                epkIncludes: [
                    "Short and extended synopsis in Spanish and English",
                    "Writer and Director statements",
                    "Complete technical and artistic credits",
                    "High-resolution stills for publication",
                    "Teaser/Trailer for download",
                    "Logos, posters, and graphic materials",
                    "Full bios of cast and creative team"
                ],

                buttons: {
                    pdf: "[PDF Complete] Available February 2026",
                    flyer: "[Flyer] Available February 2026",
                    poster: "[Poster] Available February 2026",
                },

                notesTitle: "Press Notes and Articles",
                notesText: "This section will be updated as media coverage of the project is published."
            },
            screenings: {
                title: "Itinerary",
                button: "Lorem Ipsum",
                upcomingTitle: "Upcoming Screenings",
                forumsTitle: "Screenings & Forums",
                pastTitle: "Past Screenings",
                eventButton: "Go to Event",
                viewMore: "View More",
                privateScreening: {
                    title: "Request a Private Screening",
                    description: "Is your educational organization, health center, university, or community interested in a private screening of The Last Station?",
                    emailPrompt: "Send an email to info@laultimaestacionfilm.com with the following information:",
                    fieldsTitle: "Required Information",
                    fields: [
                        "Organization name",
                        "Contact person",
                        "Email",
                        "Phone",
                        "Type of institution (educational, health, community, other)",
                        "Proposed date",
                        "Estimated number of attendees",
                        "Additional message/details"
                    ],
                    email: "info@laultimaestacionfilm.com"
                },
            },
            history: {
                title: "The Last Station",
            },
            crew: {
                title: "Crew",
                intro: "The creative team behind La Última Estación. Director, producers, cinematographers, composers, designers — the professionals who transformed this love letter to caregivers into a cinematic experience.",
            },
            contest: {
                title: "Platform Stories",
                openCallTitle: "Literary Contest 2026",
                openCallText: "A podcast about family caregiving without filters",
                scheduleTitle: "OFFICIAL TIMELINE – 2026 EDITION",
                schedule: [
                    { date: "February 15, 2026", event: "Contest launch" },
                    { date: "February 15 – March 31, 2026", event: "Story submissions" },
                    { date: "April 1 – 30, 2026", event: "Jury evaluation" },
                    { date: "May 15, 2026", event: "Winners announcement" },
                    { date: "May 20 – 30, 2026", event: "Award ceremony and testimony recording" },
                    { date: "June 2026", event: "Publication of 'Platform Stories' anthology" }
                ],
                rulesTitle: "CONTEST GUIDELINES",
                rules: {
                    participantsTitle: "PARTICIPANTS",
                    participants: [
                        "18 years or older, any country",
                        "Texts in Spanish or English",
                        "No registration or previous experience required"
                    ],
                    themeTitle: "THEME",
                    theme: "Stories or tales about the experience of unpaid caregivers. Sensitivity, authenticity, and emotional honesty will be valued.",
                    formatTitle: "FORMAT",
                    format: [
                        "Length: 1,000–2,500 words",
                        "Format: Word or PDF",
                        "Font: Times New Roman, 12 pt, 1.5 line spacing"
                    ],
                    submissionTitle: "SUBMISSION",
                    submission: [
                        "Send to: concurso@laultimaestacionfilm.com",
                        "Subject: \"Contest: Platform Stories – [Author's Name]\""
                    ]
                },
                prizesLabel: "PRIZES",
                prizesList: {
                    first: "1st Place: $300",
                    second: "2nd Place: $200",
                    third: "3rd Place: $100",
                    final: "FINALISTS",
                    video: "Winners will record audiovisual testimony capsules about their caregiving experience."
                },
                copyrightTitle: "COPYRIGHT",
                copyrightText: "Authors retain copyright over their works. Jackie Zambrano LLC / Hyper Creative Studios reserves non-exclusive rights to publish, disseminate, and adapt selected texts, always citing authorship, without additional compensation.",
                finalistsAnnouncement: "Finalists will be announced on May 15, 2026",
                form: {
                    instructions: "Fill out the form to register.",
                    namePlaceholder: "Full Name",
                    emailPlaceholder: "Email Address",
                    phonePlaceholder: "Phone Number",
                    uploadLabel: "Upload File (Story)",
                    submitButton: "Submit Story",
                }
            },
            shop: {
                title: "Take your souvenir + Gear up for your journey",
                subtitle: "Coming soon. Products available starting May 2026",
                firstItemsTitle: "First items will include:",
                firstItems: [
                    { title: "Anthology “Stories from the Platform”", desc: "Finalist stories from the literary contest | Limited physical edition" },
                    { title: "Official Short Film Poster", desc: "Exclusive design | High-quality print" },
                    { title: "[Other products to be confirmed]", desc: "" }
                ],


                productsGridTitle: "Products", // Hidden but useful for structure
                placeholderProducts: [
                    { title: "Product 1", desc: "Lorem ipsum is simply dummy text of the printing and typesetting industry.", price: "$49.99", button: "View", img: "/product-placeholder.jpg" },
                    { title: "Product 2", desc: "Lorem ipsum is simply dummy text of the printing and typesetting industry.", price: "$49.99", button: "View", img: "/product-placeholder.jpg" },
                    { title: "Product 3", desc: "Lorem ipsum is simply dummy text of the printing and typesetting industry.", price: "$49.99", button: "View", img: "/product-placeholder.jpg" },
                    { title: "Product 4", desc: "Lorem ipsum is simply dummy text of the printing and typesetting industry.", price: "$49.99", button: "View", img: "/product-placeholder.jpg" }
                ],

                gearUpTitle: "Gear Up for Your Journey",
                gearUpSubtitle: "Selected resources for caregivers",

                featuredResources: [
                    { title: "Featured Resource 1", button: "Download", img: "/resource-placeholder.jpg" },
                    { title: "Featured Resource 2", button: "Download", img: "/resource-placeholder.jpg" }
                ],

                library: {
                    title: "LIBRARY – RESOURCES FOR CAREGIVERS",
                    subtitle: "Books for the Journey",
                    intro: "As just as you take a book borrowed for your journey, here you will find selected resources on family caregiving.", // "As you take a book..." corrected slightly to match Spanish flow better or user prompt "As just as you take... wait user said 'As you take a book borrowed...' in English text provided? No, user provided 'As just as you take a book borrowed...'" - actually the user prompt says "As just as you take a book borrowed for your journey..." in the English section. I'll stick to that or clean it up? "As you borrow a book..." sounds better. User prompt: "As thus as you take a book borrowed..." wait, let me check the prompt again.
                    // User prompt EN: "Books for the Journey. Selected resources on family caregiving." 
                    // User prompt ES: "Así como tomas un libro prestado para tu viaje..."
                    // The English text in the prompt is: "As just as you take a book borrowed for your journey..." - Wait, I don't see that exact phrase in the English section of the prompt.
                    // Prompt EN: "Books for the Journey\nSelected resources on family caregiving."
                    // Prompt ES: "Libros para el Viaje\nAsí como tomas un libro prestado para tu viaje..."
                    // I will translate the Spanish intro for English since the user didn't provide a full translation for that specific sentence in the English block (or it was brief).
                    // "Just as you borrow a book for your journey, here you will find selected resources on family caregiving."

                    categories: {
                        support: {
                            title: "Support Organizations (Resources in Spanish)",
                            items: [
                                { name: "CuidaMiSalud (AARP in Spanish)", desc: "Resource center, tools, and free support for Latino family caregivers. Includes guides, articles, and videos in Spanish.", link: "https://www.aarp.org/espanol/cuidado/" },
                                { name: "Family Caregiver Alliance – Spanish Resources", desc: "Fact sheets, practical guides, and resources on specific diseases, all available in Spanish.", link: "https://www.caregiver.org/spanish/" },
                                { name: "CareOutLoud", desc: "Digital community specifically dedicated to Latino caregivers, with resources in Spanish, real stories, and culturally relevant support.", link: "https://careoutloud.org" },
                                { name: "Alzheimer’s Association in Spanish", desc: "Resources, support, and 24/7 helpline in Spanish for families affected by Alzheimer's and dementia.", link: "https://www.alz.org/espanol", phone: "1-800-272-3900" },
                                { name: "Easter Seals South Florida", desc: "Local services for people with disabilities in South Florida, including resources and support for caregivers in Spanish.", link: "https://www.easterseals.com/southflorida/" },
                                { name: "National Institute on Aging (NIA) – Spanish", desc: "Information in Spanish on health, aging, and caregiver resources from the federal government.", link: "https://www.nia.nih.gov/espanol" }
                            ]
                        },
                        legal: {
                            title: "Legal and Financial Resources",
                            items: [
                                { name: "Medicare in Spanish", desc: "Official information in Spanish on Medicare coverage, benefits, and support programs for caregivers.", link: "https://es.medicare.gov", phone: "1-800-633-4227" },
                                { name: "Benefits CheckUp (Spanish)", desc: "Free tool to find programs that help pay for medications, health care, and other expenses.", link: "https://www.benefitscheckup.org" },
                                { name: "Social Security – Spanish", desc: "Resources in Spanish on Social Security benefits, Medicare, and assistance programs.", link: "https://www.ssa.gov/espanol/", phone: "1-800-772-1213" }
                            ]
                        },
                        community: {
                            title: "Online Communities and Support",
                            items: [
                                { name: "CareOutLoud", desc: "Digital community for Latino caregivers with real stories, resources, and support in Spanish.", link: "https://careoutloud.org" },
                                { name: "Alzheimer’s Helpline (24/7 in Spanish)", desc: "Free, confidential telephone support available 24/7 in Spanish for caregivers.", link: "https://www.alz.org/es-mx/reciba-ayuda-en-espanol", phone: "1-800-272-3900" },
                                { name: "AARP Virtual Support Groups", desc: "Online support groups for Hispanic caregivers sharing similar experiences.", link: "https://www.aarp.org/espanol/cuidado/grupos-apoyo/" }
                            ]
                        },
                        literature: {
                            title: "Recommended Literature (Available in Spanish)",
                            items: [
                                { name: "Cuando el Ser Amado Tiene Demencia", author: "Susan McCurry", desc: "Practical guide for families caring for people with Alzheimer's and dementia. Available in Spanish." },
                                { name: "El Cuidador de un Ser Querido con Alzheimer", author: "AARP", desc: "Complete free guide in Spanish with practical tips for caregivers.", link: "https://www.aarp.org" }, // Link implied "Download free at..."
                                { name: "Manual para el Cuidado de Personas Mayores Dependientes", author: "IMSERSO (Spain)", desc: "Comprehensive resource on care for the elderly, caregiver self-care, and available resources." },
                                { name: "Cuidar Mejor: Guía para las Personas Cuidadoras", author: "Spanish Red Cross", desc: "Practical guide on physical, emotional, and social aspects of caregiving." },
                                { name: "El Día de 36 Horas", author: "Nancy L. Mace & Peter V. Rabins", desc: "Spanish version of the essential guide for families caring for people with Alzheimer's and dementia." }
                            ]
                        },
                        podcasts: {
                            title: "Podcasts in Spanish about Caregiving",
                            items: [
                                { name: "“Cuidadores y Cuidadoras”", platform: "Spotify", desc: "Podcast dedicated to sharing experiences and advice for those who care." },
                                { name: "“Hablemos de Alzheimer”", platform: "Alzheimer’s Association", desc: "Podcast series in Spanish about caring for people with dementia." }
                            ]
                        },
                        apps: {
                            title: "Useful Mobile Apps (Spanish available)",
                            items: [
                                { name: "CareZone", desc: "Organizes medications, medical appointments, and coordinates with other family members. Available in Spanish." },
                                { name: "Medisafe", desc: "Medication reminders with Spanish interface." },
                                { name: "MedicineWise (MedWise)", desc: "Medication tracking and reminders in Spanish." }
                            ]
                        }
                    }
                },
                disclaimer: "Important Note:\nThis is a curated list of informational resources. It does not constitute medical, legal, or financial advice. Always consult qualified professionals for specific decisions regarding care, health, legal, and financial matters."
            },
        },
        data: {
            cast: [
                { name: "ANA PAULA APOLLONIO", role: `Jessica "Honey" Morales`, bio: "Brazilian actress and voice actress based in the United States since 2001, trilingual (English, Spanish, and Brazilian Portuguese) with over two decades of experience in Hispanic and Latin American productions. Her versatility spans film, television, theater, and extensive voice work including series such as Siren (ABC Family) where she voiced Maddie Bishop, Badlands (AMC), and animations like South Park (Principal Victoria) and Glitter Force where she portrayed Kelsey/Glitter Sunny.\n\nOn screen, she starred in the feature film El Espíritu de la Muerte (Discovery Channel), participated in the youth series Grachi (Nickelodeon), and had roles in El Fantasma de Elena and Una Maid in Manhattan (Telemundo). In telenovela dubbing, she has lent her voice to lead characters in productions such as Bajo el Mismo Cielo, Señora Acero, El Rostro de la Venganza, A Mulher Perfeita, and Dinastia Del Monte, establishing herself as one of the most recognized and versatile voices in Hispanic dubbing in the United States.\n\nHer participation in The Last Station stems from a deeply personal connection: she accompanied her mother through terminal cancer as the primary caregiver, an experience that nurtures her portrayal of Jessica with emotional authenticity and visceral understanding of caregiver exhaustion, comprehending from within the invisibility and silent weight of caregiving.", img: "/Ana Paula Apollonio.jpg" },
                { name: `GUILLERMO "MEMO" SAUCEDA`, role: "John Miller", bio: "Mexican actor, voice artist, and presenter with over 40 years of international career. Graduate in Computer Administrative Systems, he completed postgraduate acting studies at Drama Studio London. Winner of three Emmy Awards (two for writing, one for editing) as host of programs for Telemundo Miami, including Edición Especial, Mira que TVO, and Ay Caramba, in addition to three SOVAS (Voice Arts Awards).\n\nHis career as a dubbing actor includes being the official Spanish voice of Mel Gibson (Lethal Weapon 1-2-3, Hamlet, Braveheart), John Travolta (Look Who's Talking 1-2-3), and Kevin Costner (Robin Hood). On television he has acted in series such as Burn Notice (USA Network) and Decisiones (Telemundo). He has produced, written, and directed content for Mundo Hispánico with videos exceeding one million views.\n\nA committed leader in the artistic community, he served as President of AFTRA Miami for two consecutive terms and co-President of SAG-AFTRA Miami. He is currently treasurer of WOVO (World Voices Organization) and president of OVU (Organización de Voces Unidas). His participation in this project stems from watching his mother care for his father for years, an experience that allows him to honor the strength of those who love without limits.", img: "/guillermo memo sauceda.jpg" },
                { name: "SONYA SMITH", role: "Annie Miller", bio: "American-Venezuelan actress with over four decades of career in telenovelas, series, and film. Born in Philadelphia and raised in Venezuela from a young age, she began her career at Radio Caracas Televisión after winning a scholarship to study with renowned teacher Amalia Pérez Díaz, continuing her training with masters such as Enrique Porte, Jean Carlos Gené, and Adda Nocetti.\n\nHer leading role in Cara Sucia (1992) catapulted her to international stardom, being seen in over 80 countries. She has starred in productions for major Hispanic networks including Olvidarte Jamás, Milagros, Acorralada, Pecados Ajenos, Marido en Alquiler (Telemundo, 2013-2014), Tierra de Reyes (Telemundo, 2014-2015), and Falsa Identidad (Telemundo, 2018-2021). In film, she participated in Ladrón que Roba a Ladrón, Bajo la Misma Luna, and The Unexpecteds. In streaming, she was part of El Repatriado and 4Ever (Disney+).\n\nA graduate nurse and certified medical interpreter, Sonya combines her artistic passion with healthcare service. Her participation in The Last Station stems from accompanying her father through Alzheimer's and the family decision to provide him the best possible care, an experience that nurtures her portrayal of Annie with authenticity about the emotional cost of caregiving.", img: "/Sonya smith.jpg" },
                { name: "AMANDA LIBERTAD", role: "Michelle - Music Therapist", bio: `Cuban-American singer, composer, pianist, and actress with a multifaceted artistic career. She began her career playing piano and singing with the University of Havana choir. As a television host, she led the Cuban program El Termómetro and later contributed musical arrangements for the film Por un Puñado de Besos.\n\nShe has composed and performed original songs for film and theater, including "No Te Vayas" for the short film Fake, musical compositions for the films Bora and La Llorona: Leyendas Mexicanas de Terror, and the theatrical play El Ruiseñor y la Rosa. She has performed at prestigious events such as the Latin Billboard Awards as pianist and backup singer for renowned Latin artists.\n\nIn theater, she starred in Bonita: El Musical and BC7B with Enrique Gou Productions, in addition to writing and performing her own play 15 Días at Microteatro Miami. Her television career includes appearances in La Rosa de Guadalupe, Doble Sentido, and Me Declaro Culpable (Televisa). In The Last Station, she embodies Michelle, the music therapist who represents the human and sensitive side of the healthcare system, recognizing pain that has no words and offering healing tools with genuine compassion.`, img: "/amanda libertad.JPG" },
                { name: "EDUARDO IBARROLA", role: "Doctor", bio: "Mexican actor born in 1953 with over 44 credits in television, film, and theater since 1997. His extensive career spans productions for major Hispanic networks and international streaming platforms.\n\nAmong his notable works are Silvana Sin Lana (Telemundo, 2016-2017 as Benito Mendoza), Vuelve a Mí (2023-2024 as Raymundo Esquivel, IMDb 7.6), Bloodline (Netflix, 2015-2017 as Marco Díaz Sr., IMDb 7.8), American Crime Story (FX, 2018, IMDb 8.4), 100 Días Para Enamorarnos (Telemundo, 2020-2021 as Pedro Franco), Eva Luna (2010-2011 as Ismael González), and Más Sabe el Diablo (2008-2009 as José Antonio Frank), demonstrating his acting versatility.\n\nIn independent film, he participated in Tres Leches (2023), award winner at the Miami Film Festival about Alzheimer's. In The Last Station, he portrays the Doctor who has treated John for 13 years, embodying the human yet professional face of the healthcare system. He knows the intimate details of the family but must be honest about the prognosis. His entrance represents the beginning of the end and the start of anticipatory grief.", img: "/eduardo ibarrola.jpeg" },
                { name: "FRANCISCO PORRAS", role: "Jessica's Boss", bio: "Mexican actor, director, and acting professor with over 27 years of career in theater, film, and television. Graduate of Universidad del Valle de México in Communication, he completed his acting training at the Experimental Theater Workshop of the Universidad Nacional Autónoma de México and at the Instituto de Liturgia, Música y Arte Cardenal Miranda. He participated with the National Theater Company and the National Institute of Fine Arts.\n\nAn actor with the company In Crescendo, a theater group dedicated to children's shows and traveling theater, he was also part of the collective Los Dramaticons at Escuela Preparatoria Texcoco, where he taught Literature and acting classes. In 2016 he was recognized as best leading actor by the Hispanic Organization of Latin Actors for his work in Cuando Duerme Conmigo. Since 2023 he has been part of the Sociedad Actoral Hispanoamericana.\n\nIn The Last Station, he portrays Jessica's Boss, embodying the complexity of the labor system that, without ill intent, ignores the realities of family caregivers. Francisco supported this project with immediate enthusiasm, recognizing a relevant and necessary story that must be shared to make visible the reality of millions of families.", img: "/francisco porras.jpeg" },
                { name: "ROSA CALZADILLA", role: "Car Rental Agent", bio: "Venezuelan actress and model who began her artistic career at a young age in theater, participating in productions for both children and adult audiences. In Venezuela, she was part of the cast of the telenovela Emperatriz (Marte TV), establishing her presence in Latin American television.\n\nAfter settling in the United States, she expanded her career with appearances in productions such as Eva Luna, El Fantasma de Elena, and Behind Closed Doors. In the commercial realm, she was the lead model for Ulta Beauty's 2020 campaign, one of the most important beauty chains in the United States, extending her reach toward high-profile professional modeling.\n\nIn The Last Station, Rosa portrays the Car Rental Agent, a character who marks the moment when Jessica takes control of her destiny. Her participation stems from a deeply personal connection: she was the primary caregiver for her mother through Alzheimer's until her recent passing, an experience that allows her to understand caregiver invisibility and authentically honor the resilience of those who love without limits.", img: "/rosa calzadilla fomdo blanco.PNG" },
                { name: "MADELEINE E. BELLIARD", role: "Ticket Inspector", bio: `Multidisciplinary Dominican-Puerto Rican artist whose four-decade trajectory spans theater, literature, and visual arts. She began accumulating recognition as a writer at age 13, publishing in the prestigious magazine Mairena while studying drama and literature at the University of Puerto Rico.\n\nBetween 1978 and 2007, she worked in virtually every aspect of theatrical production: actress, lighting and set designer, assistant director, stage manager, and producer. Her literary work includes over twenty publications available on Amazon. She has received the "Editor's Choice Award" from the Library of Congress and recognition from the 9th Women Poets Encounter. As a watercolorist and writer, she has traveled through more than ten Latin American countries sharing her art.\n\nCurrently, she also serves as a Transformational Coach, Reiki Master, and creator of the "Flame Neuro-Programming" method, focusing on creative empowerment and personal growth. In The Last Station, she portrays the Train Conductor who checks tickets, a character whose presence marks a pause in Jessica's internal journey. Her lifelong dedication to the arts brings authentic depth to her performance, understanding the transformative power of everyday moments that interrupt our passage.`, img: "/MADELEINE E. BELLIAR .JPG" },
            ],
            crew: [
                { name: "Jackie Zambrano", role: "Screenwriter, Creative Producer & Executive Producer", bio: "Writer, creative strategist, and executive producer with over 35 years of experience in multicultural storytelling, social campaigns, and purpose-driven content. Bachelor's degree in Social Communication from Universidad Católica Andrés Bello (UCAB) with a diploma in Strategic Communication.\n\nIn Venezuela, she led the launch of the talk show Geraldo, the first to be dubbed into Spanish for Latin America. She produced Zona Descarga Belmont during its early years, becoming synonymous with outdoor concerts for several generations. Founder of Jackie Zambrano LLC and Hyper Creative Studios in the United States, she has led projects for Procter & Gamble and Western Union. She is also a certified interpreter in medical and immigration fields.\n\nThe Last Station was born from her personal experience as a caregiver for over 20 years, transforming profound lived experiences into a cinematic narrative about love, sacrifice, and the possibility of healing.", img: "/Jackie Zambrano.jpg" },
                { name: "José Eduardo Pardo", role: "Director", bio: `Venezuelan filmmaker and theater director with 50 years in media. His career spans major networks (Venevisión, RCTV, Discovery Latin, MGM, Univision, Telemundo, Fox) and production companies across three continents (TV Planet, Promofilm US, Seal UK, Plaza Sésamo México, Plural/Grupo PRISA España).\n\nAs director and screenwriter, he's created the TV series "Milagros," films "Cuento sin Hadas" and "Las Pieles de la Cebolla," with short films screened at festivals in Montecatini, Leicester, and Lausanne. Author of over 130 staged theatrical works performed in Venezuela, USA, Colombia, Mexico, Spain, and Argentina. Published playwright: "Teatroando" and "Bailando con las Musas."\n\nFormer Creative Director of Ecuavisa Quito and member of Venezuela's renowned theater groups Rajatabla and Centro de Directores para el Nuevo Teatro.\n\nEduardo brings a deeply personal perspective to La Última Estación: he witnessed his mother's caregiving journey with his father, recognizing the invisible strength and sacrifice that inspired his vision for this film.`, img: "/EDUARDO PARDO.JPG" },
                { name: "Alejandro Valladares", role: "Producer & Executive Producer", bio: `Venezuelan film producer and entrepreneur based in Miami, with over 10 years of experience in film, television, music videos, and commercials. Co-founder of Vazu LLC with Marielena Zuccaro, a production support company specializing in logistical solutions for high-profile productions.\n\nHis work in music videos has received industry recognition, including a Latin Grammy nomination for the video "Ale Ale" and recognition at the VMA Awards for "La Patrulla" by Peso Pluma. Ha producido videos para artistas como Marc Anthony, Bad Bunny, Feid y Lil Wayne, y comerciales para marcas globales incluyendo Nike, Adidas, Hyundai, Evian y Zara.\n\nHis narrative film experience includes work as production manager and line producer on feature films such as The Provocateur (2022) and Venganza en Las Vegas (2023). He brings international expertise in budgets, logistics, and team coordination.`, img: "/Alejandro Valladares.jpg" },
                { name: "Marielena Zuccaro", role: "Production Manager", bio: `Marielena Zuccaro is a U.S.-based audiovisual producer and co-founder of VAZU, a production services company that provides comprehensive on-set support, production supplies, vehicles, and communication systems to facilitate seamless audiovisual logistics across South Florida productions.\n\nSince 2020, she has worked across film, commercials, music videos, and television as Production Coordinator, Production Manager, and Producer. Her portfolio includes narrative films (Phoenix, The Devil Trap, Paper Empire), television promotions for Telemundo, Univision, and Unimas, branded campaigns with Kenneth Cole, Hyundai, Baptist Health, Lowe's, and Zara, plus music videos for Bad Bunny, Karol G, Shakira, Ozuna, and Juanes.\n\nMarielena brings structure, creative sensitivity, and entrepreneurial vision to every production.`, img: "/MARIELENA ZUCCARO.jpg" },
                { name: "Daniel Bethencourt Lambert", role: "Executive Producer", bio: "CEO and executive producer of Mar de Fondo LLC with over 23 years of experience in audiovisual media, television, and digital content. Master's degree in Digital Film Direction and Production from Universidad de La Laguna, Spain.\n\nHe served as general director of Sun Channel and Sport Plus Channel in Venezuela and graphics services manager at Venevisión, responsible for the network's branding. Winner of Golden Promax Los Angeles 2002 and Silver Latin BDA Argentina 2002. He has been a jury member at Promax & BDA International and speaker at international sports marketing forums.\n\nBased in Miami since 2010, he specializes in artistic direction, project management, and international content production. His executive experience at major television networks ensures professional standards while operating within independent film budget realities.", img: "/Daniel Bethencourt.jpeg" },
                { name: "Charlie Nelson", role: "Director of Photography", bio: `Latin Grammy-nominated director and cinematographer, known for his work with artists such as Reik, Myke Towers, Ozuna, Camilo, Luis Fonsi, and Grupo Firme. Winner of Video of the Year at the 2021 Heat Awards and two 2023 Pepsi Music Awards, including "Video of the Year."\n\nHis video "Ojos Marrones" by Lasso was recognized by MTV as one of the best of 2022. In 2023 he won a Silver Telly Award for his Hyundai project. Founder of the production company "We Want To Film," he is currently working on his first feature film.\n\nBased in Miami, his eclectic, narrative-focused style has been featured at Premios Juventud and Billboard. For The Last Station, he brings his proven ability to capture emotional intimacy on camera, translating the director's vision into a visual language that honors the dignity of caregivers.`, img: "/Charlie Nelson.jpeg" },
                { name: "Arturo Manuitt", role: "First Assistant Director", bio: "Director and two-time Regional Suncoast Emmy Award winner (2019-2022), specializing in commercials, music videos, television, and film. He has directed productions for Nickelodeon Latin America (ISA TKM, GRACHI, Every Witch Way) and Telemundo/NBC (Corazón Valiente, Santa Diabla).\n\nHis work includes campaigns for brands such as Marvel, Paramount, L'Oréal, and Universal Pictures, including Captain Marvel and Mission: Impossible – Fallout. He began his career in Venezuela directing the country's first sitcom with a live audience and internationally acclaimed telenovelas for RCTV.\n\nAs first assistant director on The Last Station, he coordinates all film departments and manages the shooting schedule. His two Emmys and extensive experience across multiple formats ensure professional execution under the compressed timelines of independent production.", img: "/Arturo Manuitt.webp" },
                { name: "Juliana Mesa", role: "Production Designer & Art Director", bio: `Production designer and art director with over 15 years of experience in television, film, music videos, and commercials. Bachelor's degree in Interior Design from The Art Institute of Fort Lauderdale, combining technical expertise with artistic sensitivity to create visual worlds that serve the narrative.\n\nHer work spans high-profile productions including music videos for Bad Bunny ("Moscow Mule"), Daddy Yankee ("No Se Da Cuenta"), Maluma ("Ojalá" with Adam Levine), Marc Anthony ("Nada de Nada"), Rosalía ("Rojo" with Romeo Santos), Ozuna, J Balvin, and Rauw Alejandro. In commercials, she has worked for Zara, Under Armour, Bloomingdale's, Pandora, and National Geographic.\n\nHer television experience includes seven years as Set Design Manager at Telemundo/NBC Universal (2011-2018). In film, she has been production designer on feature films for Lifetime including The Provocateur (2022).`, img: "/Juliana Mesa.jpeg" },
                { name: "Alejandro Campos", role: "Composer & Audio Engineer", bio: `Composer, music producer, pianist, and orchestra conductor based in Miami. Winner of the 2004 ASCAP award for "Así es la Vida," recognized as Best Pop Song of the Year and performed by Olga Tañón.\n\nHe has composed original music for 18 telenovelas broadcast worldwide, including La Revancha, Gata Salvaje, and Eva Luna, for companies such as Fonovideo and Venevisión Productions. As a music producer, he has worked with Sony Music artists including Franco de Vita, Chayanne, Leda Batisti, and Axel, among others.\n\nHe has performed as pianist and musical director alongside figures such as Dionne Warwick, Christopher Cross, Arturo Sandoval, and Jon Secada. He is currently Composer in Residence of the Miami Symphony Orchestra under the direction of Maestro Eduardo Marturet. For The Last Station, he creates an original score with piano as the main instrument.`, img: "/Alejandro Campos.jpg" },
                { name: "Joe Centeno", role: "Art Director & Graphic Designer | Branding", bio: "Senior art director, illustrator, and graphic designer with over 30 years of experience in creative direction and visual production for film, television, advertising campaigns, and digital content. He masters both traditional analog techniques (freehand drawing, ink illustration, airbrush) and advanced digital production.\n\nSince 2010, he has been Art Director at Jackie Zambrano LLC/Hyper Creative Studios, where he has created the complete branding for The Last Station. He has developed the visual identity of the talk show Geraldo in Spanish for Latin America, campaigns for Western Union in Central America and the Caribbean, and branding for artists such as Cris Campocasso, Franco de Vita, and Carlos Baute, in addition to the branding of KOATI, an animated film on Netflix.\n\nHis work includes storyboards for Celuloide productions and branding for international concerts in Venezuela (Alanis Morissette, Rubén Blades, Shakira, David Copperfield). Designer of the magazine Miami para Niños, he fuses visual identity and narrative creating cohesive experiences.", img: "/Joe Centeno.jpg" },
                { name: "Marisela Rondon", role: "Wardrobe Stylist", bio: `Venezuelan costume designer and wardrobe stylist based in Miami, with over 20 years of experience in film, television, commercials, and music videos. Bachelor's degree in Social Communication with specialization in Public Relations and Advertising from Universidad Católica Andrés Bello (UCAB).\n\nHer work includes the feature film SIMON THE FILM (2021) directed by Diego Vicentini, the miniseries LA FUERZA DE CREER "DULCE SAZÓN" Season 4 for Univision (2023) directed by Charlie Cartaya, and the short film NYCTO SERIES (2023) directed by Ángel Barroeta.\n\nRecognized for her cultural sensitivity and ability to build characters and emotions through wardrobe, her work combines narrative intuition with meticulous attention to detail. For The Last Station, she creates wardrobe that reflects the characters' emotional journey without competing with the narrative.`, img: "/Marisela Rondon.jpg" },
                { name: "Nina Rodrígues", role: "Behind the Scenes Photography & Videography", bio: `Nina Rodrígues is the photographer and videographer capturing the essence of La Última Estación behind the scenes. With over five years of documenting visual stories in the entertainment industry, Nina brings her artistic sensitivity to preserve every authentic moment of the shoot. Her experience includes work as creative director and official photographer on high-profile music projects, including collaborations with Lagos and Jhay Wheeler (2025), Lil Supa (2025), and CNCO (2022), as well as her work on Luis Chataing's program Conectados (2020).\n\nFor this short film, Nina transcends the traditional role of set documentarian. Her goal is to capture not just the technical shots but the silent emotions between scenes: the vulnerability of actors preparing, the moments of human connection among the crew, and the intimate atmosphere that defines this project. Through both photography and video, she creates a visual narrative that complements the film itself. Her work will serve both as a historical archive of the production and as promotional and press materials, honoring the emotional depth that La Última Estación represents for everyone involved in telling this story about love, loss, and self-rediscovery.`, img: "/nina rodriguez.jpg" },
            ],
            events: [
                { date: "30-11-2025", time: "10:00AM - 12:00PM", location: "Lorem Ipsum text", description: "Lorem Ipsum description", category: "upcoming" },
                { date: "30-11-2025", time: "10:00AM - 12:00PM", location: "Lorem Ipsum text", description: "Lorem Ipsum description", category: "upcoming" },
                { date: "30-11-2025", time: "10:00AM - 12:00PM", location: "Lorem Ipsum text", description: "Lorem Ipsum description", category: "forums" },
            ],
            pastEvents: [
                { title: "Event", date: "Date" },
                { title: "Event", date: "Date" },
                { title: "Event", date: "Date" },
            ],
            products: [
                { title: "Product", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
                { title: "Product", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
                { title: "Product", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
                { title: "Product", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
            ],
            bloopers: [
                { title: "Unexpected cut" },
                { title: "Laughter on set" },
                { title: "Technical issues" },
            ],
            jury: [
                {
                    name: "Tatiana Ramos",
                    role: "Jury Coordinator",
                    bio: "Doctor in Information Sciences, journalist, graduated from Universidad Católica Andrés Bello (UCAB), and PhD from Universidad de La Laguna, Spain. With over 40 years of experience in the editorial and communications fields, she has resided in the United States for more than 25 years.\n\nShe has participated in numerous short story contests, received awards and recognition, and been published on multiple literary platforms and by publishers. As a literary contest judge, she has contributed to the evaluation and promotion of both emerging and established voices.\n\nAs an editor and curator for several magazines, she has worked extensively in editing and publishing books by independent authors, maintaining high editorial standards across diverse genres and formats. Her communications work includes content development for print media, radio, and television.\n\nProfessor at higher education institutions in the United States and speaker at academic and cultural forums on writing, communication, publishing, and media.",
                    img: "/tatiana ramos - jurado.png"
                },
                {
                    name: "Alfredo Ruiz Islas",
                    role: "Jury",
                    bio: "Mexican writer and historian (Mexico City, 1975). Author of seven published novels and twenty short stories featured in literary magazines and compilations in Mexico, Argentina, Spain, Chile, and the United States. Professor at UNAM and Universidad Iberoamericana.\n\nHis writings have earned nearly twenty national and international literary awards, including the National Literature Prize for Young People FeNal-Norma (2014), Sixth Continent Historical Fiction Prize (Spain), I Literary Contest of San Antonio de Areco (Argentina), and XXV Timón de Oro Literary Contest awarded by the Heroica Escuela Naval Militar (Mexico).\n\nHis novel El viaje a la nada was included in the prestigious The White Ravens catalog (2018) by the Internationale Jugendbibliothek in Munich. He has received recognition from IBBY México and Fundación Cuatrogatos for his outstanding texts. As historian and writer, his works span historical narratives and young adult themes, gaining international recognition for his style and narrative depth.",
                    img: "/alfredo ruiz islas - jurado.jpg"
                },
                {
                    name: "Carmen Verde Arocha",
                    role: "Jury",
                    bio: "Venezuelan poet, writer, and cultural manager. Bachelor's degree in Literature and Master's in Venezuelan History from Universidad Católica Andrés Bello (UCAB). Director of Editorial Eclepsidra since 1994, recognized as one of Venezuela's most important contemporary poets.\n\nHer poetic work includes Magdalena en Ginebra (1997), Mieles. Poesía reunida (2005), Canción gótica (2017), and Que el río responda (Visor Libros, 2025). She has published essays on editorial publishing and interviews with prominent Venezuelan authors.\n\nWinner of the First Prize \"Arístides Rojas\" (1999), III National Book Prize of Venezuela (2005), FILUC Button, Universidad de Carabobo (2024), Antonio L. Bouza Poetry Prize, City of Burgos (2025), and International Excellence Award: Celebrating Women Who Inspire (2025). Her work has been included in multiple international anthologies.\n\nProfessor at UCAB and Universidad Metropolitana de Caracas, former general manager of Casa de la Poesía de Caracas.",
                    img: "/Carmen Verde Arocha - jurado.jpg"
                },
                {
                    name: "Alberto Ferreras",
                    role: "Jury",
                    bio: "Author, filmmaker, and communications expert with an international career across multiple platforms and narrative genres. His work explores Latino identity, bilingualism, and cultural intersections between the United States, Europe, and the Spanish-speaking world.\n\nCreator and director of the documentary series Habla for HBO (2003-2022), pioneering audiovisual reflection on Latino identity in the United States and spanglish representation in media. In 2022, the Smithsonian Institution inaugurated its first gallery dedicated to the Latino experience with his video installation Somos at the National Museum of American History.\n\nHe has written for Vanity Fair España and contributed to Revista de Occidente —founded by José Ortega y Gasset— with the essay El triunfo del espanglish (October 2025). He has presented immersive video installations at Instituto Cervantes in New York and Lisbon.\n\nHe debuted as a screenwriter at Sundance 2015 with ¡Que viva la música! and is author of B as in Beauty, awarded Best Fiction at the International Latino Book Awards (2009).",
                    img: "/Alberto Ferreras - jurado.jpeg"
                },
                {
                    name: "Jackie Zambrano",
                    role: "Juror",
                    bio: "Screenwriter and producer of the short film The Last Station, with over 30 years of experience as a copywriter and content creator. Bachelor's degree in Social Communication from Universidad Católica Andrés Bello (UCAB) with a diploma in Strategic Communication.\n\nHer editorial trajectory includes her role as editor of Miami para Niños magazine and contributor to Orgullosa, Procter & Gamble's Hispanic community. She has written for various publications, combining narrative sensitivity with editorial rigor.\n\nFounder of Hyper Creative Studios, she has led content projects for brands such as Café Bustelo and Western Union, specializing in storytelling with purpose and social impact.\n\nHer experience as a caregiver for over 20 years inspired the creation of The Last Station, a work of fiction that explores love, sacrifice, and human resilience. Her vision as a writer merges emotional truth with narrative structure, bringing a deep and human perspective to literary evaluation.",
                    img: "/Jackie Zambrano - jurado.png"
                }
            ]
        }
    },
    es: {
        navbar: {
            home: "Inicio",
            shortFilm: "Cortometraje",
            history: "Historia",
            crew: "Equipo",
            cast: "Elenco",
            press: "Prensa",
            screenings: "Proyecciones",
            shop: "Tienda",
            contest: "Concurso",
            testimony: "Testimoniales",
        },
        contact: {
            title: "Contacto",
            supportTitle: "Apoya este proyecto",
            supportText: "Ayúdanos a dar voz a los 53 millones de cuidadores invisibles.",
            supportButton: "APOYA\nESTE\nVIAJE",
        },
        hero: {
            title: "El viaje",
        },
        trailer: {
            title: "Trailer",
            subtitle: "La Última Estación",
        },
        nextStop: {
            title: "Próxima Parada",
            stories: "Sobre el trayecto",
            screenings: "Los pasajeros VIP",
        },
        about: {
            title: "Este viaje comienza contigo",
            description: "Hay viajes que no se miden en kilómetros, sino en lo que dejamos atrás y lo que finalmente nos atrevemos a soltar.\n\nJessica Morales sube a un tren con los últimos vestigios de un amor que la agotó. Lo que comienza como un viaje hacia la costa se convierte en un descubrimiento: ella no fue la primera en desaparecer por él.\n\nA través de una narrativa entrelazada, el cortometraje La Última Estación revela la verdad silenciosa del cuidador: que el amor duele, que el agotamiento no tiene culpa, y que sanar también es una forma de amar.\n\nProducción: Enero 2026 | Miami, Florida",
        },
        history: {
            inspirationTitle: "Jackie Zambrano, Guionista y Productora",
            inspirationText: `"La Última Estación es una carta de amor a todos los cuidadores invisibles que sacrifican su identidad, sus sueños y su salud por amor. Es un recordatorio de que el duelo del cuidador comienza mucho antes de la pérdida física y que sanar requiere reconocer tanto el dolor como el amor que lo causó.\n\nEsta historia honra la fortaleza silenciosa de quienes cuidan, la conexión humana que trasciende el tiempo y el poder transformador de compartir nuestras experiencias más vulnerables."`,
            historyTitle: "La Historia",
            historyText: "Después de ocho años cuidando a su esposo enfermo, Jessica Morales aborda un tren con su pasado en una maleta y un futuro incierto. En este viaje solitario, descubre que el dolor del cuidador trasciende el tiempo y las personas, y que su invisibilidad no es accidente —es sistemática.\n\nLa Última Estación es una meditación lírica sobre los 63 millones de cuidadores familiares en Estados Unidos —mayoritariamente mujeres, mayoritariamente invisibles— que sostienen vidas ajenas mientras las propias se desvanecen.",
            visionTitle: "Visión del Director - Eduardo Pardo",
            visionText: "La Última Estación abraza la complejidad del amor y la pérdida sin dramatismo gratuito. Jessica, Annie y John representan un triángulo temporal donde el cuidado se transmite de mujer a mujer a través del tiempo.\n\nEl tren es un confesionario móvil. Cada estación marca una etapa del duelo; cada túnel, una inmersión en la memoria compartida. El ritmo del clack-clack sobre los rieles marca el renacimiento de Jessica.\n\nVisualmente, la paleta emocional evoluciona con su arco: de azules fríos a dorados cálidos. El diario de Annie funciona como puente temporal. El ritual final del fuego se vuelve transformación alquímica, no despedida.\n\nEsta película respira, propone, honra el silencio como lenguaje emocional. Con un elenco que entiende la diferencia entre actuación y verdad, se convertirá en espejo universal.\n\nPorque todos habitamos esta historia sin darnos cuenta. Y merecemos verla reflejada con dignidad.",
            galleryTitle: "Galería",
            bloopersTitle: "Bloopers",
            invisibleReality: {
                title: "LA REALIDAD INVISIBLE",
                stats: [
                    { value: "63 millones", label: "Cuidadores familiares no remunerados en Estados Unidos" },
                    { value: "80%", label: "Mujeres que asumen el rol de cuidadoras primarias" },
                    { value: "$600 mil millones", label: "Valor económico anual del trabajo de cuidado no remunerado" },
                    { value: "1 de cada 5", label: "Ha experimentado impactos en su salud física y mental" },
                ],
                text: "La Última Estación visibiliza una realidad mundial: el cuidador familiar es invisible para el sistema, la sociedad, la familia —incluso para quienes intentan protegerlo. Este cortometraje confronta el romanticismo y el positivismo tóxicos que silencian el agotamiento, la culpa y el duelo anticipado de quienes aman hasta desaparecer.\n\nEsta es una obra de ficción inspirada en conversaciones sostenidas con cientos de cuidadores. No es terapia. Es un cine que abre la puerta a una conversación honesta, real, sin censura.",
            },
        },
        anthology: {
            title: "Antología",
            text: "La antología Historias de Andén reunirá las 13 historias seleccionadas en una publicación que celebra la resiliencia, el amor y la humanidad de quienes cuidan.",
            button: "Publicación: Junio 2026",
            bookTitle: "Historias del Andén",
        },
        pages: {
            bitacora: {
                title: "VOCES DEL ANDÉN",
                introTitle: "Un podcast sobre el cuidado familiar sin filtros",
                podcastSection: {
                    intro: "El cuidado familiar no viene con un manual de instrucciones. Tampoco con permiso para hacer las preguntas incómodas:",
                    questions: [
                        "¿Puedo estar enojada con alguien a quien amo?",
                        "¿Es normal desear que todo termine?",
                        "¿Cómo reconcilio la culpa con el agotamiento?"
                    ],
                    outro: "Voces del Andén es un espacio para las conversaciones que no se tienen en público. Sin positivismo tóxico. Sin consejos no solicitados. Solo verdad.",
                    details: [
                        { label: "Formato:", value: "10 episodios | Temporada 1" },
                        { label: "Conducción:", value: "Jackie Zambrano" },
                        { label: "Disponible en:", value: "YouTube" },
                        { label: "Primer episodio:", value: "Marzo 2026" }
                    ]
                },
                instructions: {
                    shareTitle: "COMPARTE TU VOZ EN VIDEO",
                    shareIntro: "¿Has sido cuidador? ¿Conoces a alguien que porta esta historia en silencio? Te invitamos a grabar tu testimonio y ser parte de Voces del Andén.",
                    seekingTitle: "¿Qué buscamos?",
                    seeking: [
                        "Tu experiencia como cuidador (o la de alguien cercano)",
                        "Qué significó cuidar: lo que ganaste, lo que perdiste, lo que aprendiste",
                        "Qué querías escuchar cuando más lo necesitabas",
                        "Un mensaje para otros cuidadores que están en el camino"
                    ],
                    formatTitle: "Formato sugerido:",
                    format: [
                        "Duración: 2-5 minutos",
                        "Horizontal o vertical (como prefieras)",
                        "Habla directamente a cámara o graba tu voz en off",
                        "Idioma: Español o inglés",
                        "No necesitas equipo profesional—tu teléfono es suficiente"
                    ],
                    email: "Envía tu testimonio a: testimonios@laultimaestacionfilm.com",
                    emailNote: "(Tu historia puede ser anónima si lo prefieres. Nosotros editaremos y publicaremos con tu aprobación.)",
                    techTitle: "REQUISITOS TÉCNICOS",
                    videoTitle: "Para video:",
                    video: [
                        "Formato: MP4, MOV o similar",
                        "Buena iluminación (luz natural funciona perfecto)",
                        "Audio claro (evita lugares con mucho eco o ruido de fondo)",
                        "Encuadre: Tu rostro visible y centrado (si decides mostrarte)"
                    ],
                    audioTitle: "Para audio/podcast:",
                    audio: [
                        "Formato: MP3 o WAV",
                        "Graba en un lugar silencioso",
                        "Habla con calma, sin prisa"
                    ],
                    contentTitle: "Contenido recomendado:",
                    content: [
                        "Preséntate brevemente (nombre, relación con el cuidado)",
                        "Comparte tu historia: ¿A quién cuidaste? ¿Durante cuánto tiempo?",
                        "Reflexiona: ¿Qué aprendiste? ¿Qué necesitabas escuchar?",
                        "Cierra con un mensaje para otros cuidadores"
                    ],
                    privacyTitle: "Privacidad:",
                    privacy: [
                        "No compartas información médica sensible sin consentimiento",
                        "Puedes usar seudónimo si prefieres el anonimato",
                        "Revisaremos tu video antes de publicarlo y te pediremos autorización"
                    ]
                }
            },
            cast: {
                title: "Pasajeros",
                intro: "Las voces que dan vida a este viaje. Cada actor trae no solo su talento, sino también su propia experiencia con el cuidado. Conoce a las personas detrás de cada personaje, que dan voz a tu historia, a la propia, o a la de miles.",
            },
            press: {
                title: "Kiosko",

                contactInfoTitle: "Información de Contacto",
                pressMediaLabel: "Prensa y Medios:",
                email: "prensa@laultimaestacion.com", // Keeping strictly as requested for Spanish even if different domain
                phoneLabel: "Teléfono:",
                phone: "+1 (518) 512-7243",
                producerLabel: "Productora Ejecutiva:",
                producerName: "Jackie Zambrano",
                producerEmail: "jaz@jackiezambrano.com",
                contactAddress: "Miami, FL",

                dossierTitle: "Dosier de Prensa Electrónico (EPK)",
                epkAvailable: "Disponible: Febrero 2026",
                dossierText: "Material de prensa y cobertura mediática. Cada historia merece ser contada. Encuentra aquí todo lo necesario para compartir La Última Estación con tu audiencia.\n\nEl press kit incluirá:",
                epkIncludes: [
                    "Sinopsis (corta y extendida) en español e inglés",
                    "Statement de guionista y director",
                    "Fichas técnicas y artísticas completas",
                    "Stills de alta resolución para publicación",
                    "Teaser/Trailer para descarga",
                    "Logos, pósters y materiales gráficos",
                    "Bios completas del elenco y equipo creativo"
                ],

                buttons: {
                    pdf: "[PDF Completo] Disponible febrero 2026",
                    flyer: "[Flyer] Disponible febrero 2026",
                    poster: "[Poster] Disponible febrero 2026",
                },

                notesTitle: "Notas de Prensa y Artículos",
                notesText: "Esta sección se actualizará conforme se publique cobertura mediática sobre el proyecto."
            },
            screenings: {
                title: "Itinerario",
                button: "Lorem Ipsum",
                upcomingTitle: "Próximas proyecciones",
                forumsTitle: "Proyecciones y foros",
                pastTitle: "Proyecciones pasadas",
                eventButton: "Ir a Evento",
                viewMore: "Ver más",
                privateScreening: {
                    title: "Solicita una Proyección Privada",
                    description: "¿Tu organización educativa, centro de salud, universidad, o comunidad está interesada en una proyección privada de La Última Estación?",
                    emailPrompt: "Envía un correo electrónico a info@laultimaestacionfilm.com con la siguiente información:",
                    fieldsTitle: "Información Requerida",
                    fields: [
                        "Nombre de la organización",
                        "Persona de contacto",
                        "Email",
                        "Teléfono",
                        "Tipo de institución (educativa, salud, comunitaria, otra)",
                        "Fecha propuesta",
                        "Número estimado de asistentes",
                        "Mensaje/detalles adicionales"
                    ],
                    email: "info@laultimaestacionfilm.com"
                },
            },
            history: {
                title: "La Última Estación",
            },
            crew: {
                title: "Tripulación",
                intro: "El equipo creativo detrás de La Última Estación. Director, productores, cinematógrafos, compositores, diseñadores — los profesionales que convirtieron esta carta de amor a los cuidadores en una experiencia cinematográfica.",
            },
            contest: {
                title: "HISTORIAS DEL ANDÉN",
                openCallTitle: `Concurso Literario "Historias de Andén"`,
                openCallText: "Concurso literario para cuidadores familiares",
                scheduleTitle: "CRONOGRAMA OFICIAL – EDICIÓN 2026",
                schedule: [
                    { date: "15 de febrero de 2026", event: "Lanzamiento del concurso" },
                    { date: "15 de febrero – 31 de marzo de 2026", event: "Recepción de relatos" },
                    { date: "1 – 30 de abril de 2026", event: "Evaluación del jurado" },
                    { date: "15 de mayo de 2026", event: "Anuncio de ganadores" },
                    { date: "20 – 30 de mayo de 2026", event: "Entrega de premios y grabación de testimonios" },
                    { date: "Junio de 2026", event: "Publicación de la antología Historias de Andén" }
                ],
                rulesTitle: "BASES DEL CONCURSO",
                rules: {
                    participantsTitle: "PARTICIPANTES",
                    participants: [
                        "Mayores de 18 años, de cualquier país",
                        "Textos en español o inglés",
                        "No se requiere inscripción ni experiencia previa"
                    ],
                    themeTitle: "TEMA",
                    theme: "Relatos o cuentos sobre la experiencia de cuidadores no remunerados. Se valorará la sensibilidad, autenticidad y honestidad emocional.",
                    formatTitle: "FORMATO",
                    format: [
                        "Extensión: 1,000–2,500 palabras",
                        "Formato: Word o PDF",
                        "Fuente: Times New Roman, 12 pt, interlineado 1.5"
                    ],
                    submissionTitle: "ENVÍO",
                    submission: [
                        "Enviar a: concurso@laultimaestacionfilm.com",
                        "Asunto: \"Concurso: Historias de Andén – [Nombre del autor]\""
                    ]
                },
                prizesLabel: "PREMIOS",
                prizesList: {
                    first: "1er lugar: $300",
                    second: "2do lugar: $200",
                    third: "3er lugar: $100",
                    final: "FINALISTAS",
                    video: "Los ganadores grabarán cápsulas audiovisuales de testimonio sobre su experiencia como cuidadores."
                },
                copyrightTitle: "DERECHOS DE AUTOR",
                copyrightText: "Los autores conservan los derechos de autor sobre sus obras. Jackie Zambrano LLC / Hyper Creative Studios se reserva el derecho no exclusivo de publicación, difusión y adaptación de los textos seleccionados, citando siempre la autoría, sin compensación adicional.",
                finalistsAnnouncement: "Los finalistas se anunciarán el 15 de mayo de 2026",
                form: {
                    instructions: "Completa el formulario para inscribirte.",
                    namePlaceholder: "Nombre y Apellido",
                    emailPlaceholder: "Correo electrónico",
                    phonePlaceholder: "Número de teléfono",
                    uploadLabel: "Subir archivo (Historia)",
                    submitButton: "Enviar Historia",
                }
            },
            shop: {
                title: "Lleva tu Souvenir + Equípate para tu Viaje",
                subtitle: "Próximamente. Productos disponibles a partir de mayo 2026",
                firstItemsTitle: "Los primeros artículos incluirán:",
                firstItems: [
                    { title: "Antología 'Historias de Andén'", desc: "Relatos finalistas del concurso literario | Edición física limitada" },
                    { title: "Póster Oficial del Cortometraje", desc: "Diseño exclusivo | Impresión de alta calidad" },
                    { title: "[Otros productos por confirmar]", desc: "" }
                ],

                productsGridTitle: "Productos",
                placeholderProducts: [
                    { title: "Producto 1", desc: "Lorem ipsum is simply dummy text of the printing and typesetting industry.", price: "$49.99", button: "Ver", img: "/product-placeholder.jpg" },
                    { title: "Producto 2", desc: "Lorem ipsum is simply dummy text of the printing and typesetting industry.", price: "$49.99", button: "Ver", img: "/product-placeholder.jpg" },
                    { title: "Producto 3", desc: "Lorem ipsum is simply dummy text of the printing and typesetting industry.", price: "$49.99", button: "Ver", img: "/product-placeholder.jpg" },
                    { title: "Producto 4", desc: "Lorem ipsum is simply dummy text of the printing and typesetting industry.", price: "$49.99", button: "Ver", img: "/product-placeholder.jpg" }
                ],

                gearUpTitle: "Equípate para tu Viaje",
                gearUpSubtitle: "Recursos Seleccionados para Cuidadores",

                featuredResources: [
                    { title: "Recurso Destacado 1", button: "Descargar", img: "/resource-placeholder.jpg" },
                    { title: "Recurso Destacado 2", button: "Descargar", img: "/resource-placeholder.jpg" }
                ],

                library: {
                    title: "BIBLIOTECA - RECURSOS PARA CUIDADORES",
                    subtitle: "Libros para el Viaje",
                    intro: "Así como tomas un libro prestado para tu viaje, aquí encontrarás recursos seleccionados sobre cuidado familiar.",

                    categories: {
                        support: {
                            title: "Organizaciones de Apoyo (Recursos en Español)",
                            items: [
                                { name: "CuidaMiSalud (AARP en Español)", desc: "Centro de recursos, herramientas y apoyo gratuito para cuidadores familiares latinos. Incluye guías, artículos y videos en español.", link: "https://www.aarp.org/espanol/cuidado/" },
                                { name: "Family Caregiver Alliance - Recursos en Español", desc: "Hojas informativas, guías prácticas y recursos sobre enfermedades específicas, todo disponible en español.", link: "https://www.caregiver.org/spanish/" },
                                { name: "CareOutLoud", desc: "Comunidad digital dedicada específicamente a cuidadores latinos, con recursos en español, historias reales y apoyo culturalmente relevante.", link: "https://careoutloud.org" },
                                { name: "Alzheimer's Association en Español", desc: "Recursos, apoyo y línea de ayuda 24/7 en español para familias afectadas por Alzheimer y demencias.", link: "https://www.alz.org/espanol", phone: "1-800-272-3900" },
                                { name: "Easter Seals South Florida", desc: "Servicios locales para personas con discapacidades en el sur de Florida, incluyendo recursos y apoyo para cuidadores en español.", link: "https://www.easterseals.com/southflorida/" },
                                { name: "Instituto Nacional sobre el Envejecimiento (NIA)", desc: "Información en español sobre salud, envejecimiento y recursos para cuidadores del gobierno federal.", link: "https://www.nia.nih.gov/espanol" }
                            ]
                        },
                        legal: {
                            title: "Recursos Legales y Financieros",
                            items: [
                                { name: "Medicare en Español", desc: "Información oficial en español sobre la cobertura de Medicare, los beneficios y los programas de apoyo para cuidadores.", link: "https://es.medicare.gov", phone: "1-800-633-4227" },
                                { name: "Benefits CheckUp (en Español)", desc: "Herramienta gratuita para encontrar programas que ayudan a pagar medicamentos, cuidado de salud y otros gastos.", link: "https://www.benefitscheckup.org" },
                                { name: "Seguro Social - Información en Español", desc: "Recursos en español sobre los beneficios del Seguro Social, Medicare y programas de asistencia.", link: "https://www.ssa.gov/espanol/", phone: "1-800-772-1213" }
                            ]
                        },
                        community: {
                            title: "Comunidades y Apoyo en Línea",
                            items: [
                                { name: "CareOutLoud", desc: "Comunidad digital para cuidadores latinos con historias reales, recursos y apoyo en español.", link: "https://careoutloud.org" },
                                { name: "Línea de Ayuda de Alzheimer's (24/7 en español)", desc: "Apoyo telefónico gratuito, confidencial y disponible 24/7 en español para cuidadores.", link: "https://www.alz.org/es-mx/reciba-ayuda-en-espanol", phone: "1-800-272-3900" },
                                { name: "Grupos de Apoyo Virtuales de AARP", desc: "Grupos de apoyo en línea para cuidadores hispanos que comparten experiencias similares.", link: "https://www.aarp.org/espanol/cuidado/grupos-apoyo/" }
                            ]
                        },
                        literature: {
                            title: "Literatura Recomendada (Disponible en Español)",
                            items: [
                                { name: "Cuando el Ser Amado Tiene Demencia", author: "Susan McCurry", desc: "Guía práctica para familias que cuidan a personas con Alzheimer y demencia. Disponible en español." },
                                { name: "El Cuidador de un Ser Querido con Alzheimer", author: "AARP", desc: "Guía completa gratuita en español con consejos prácticos para cuidadores.", link: "https://www.aarp.org" },
                                { name: "Manual para el Cuidado de Personas Mayores Dependientes", author: "IMSERSO (España)", desc: "Recurso integral sobre cuidados a personas mayores, autocuidado del cuidador y recursos disponibles." },
                                { name: "Cuidar Mejor: Guía para las Personas Cuidadoras", author: "Cruz Roja Española", desc: "Guía práctica sobre aspectos físicos, emocionales y sociales del cuidado." },
                                { name: "El Día de 36 Horas", author: "Nancy L. Mace y Peter V. Rabins", desc: "Versión en español de la guía esencial para familias que cuidan a personas con Alzheimer y demencia." }
                            ]
                        },
                        podcasts: {
                            title: "Podcasts en español sobre cuidado",
                            items: [
                                { name: "“Cuidadores y Cuidadoras”", platform: "Spotify", desc: "Podcast dedicado a compartir experiencias y consejos para quienes cuidan." },
                                { name: "“Hablemos de Alzheimer”", platform: "Alzheimer's Association", desc: "Serie de podcasts en español sobre el cuidado de personas con demencia." }
                            ]
                        },
                        apps: {
                            title: "Aplicaciones Móviles Útiles (Español disponible)",
                            items: [
                                { name: "CareZone", desc: "Organiza medicamentos, citas médicas y coordina con otros miembros de la familia. Disponible en español." },
                                { name: "Medisafe", desc: "Recordatorios de medicamentos con interfaz en español." },
                                { name: "MedicineWise (MedWise)", desc: "Seguimiento de medicamentos y recordatorios en español." }
                            ]
                        }
                    }
                },
                disclaimer: "Nota importante:\nEsta es una lista curada de recursos informativos. No constituye asesoría médica, legal o financiera. Siempre consulta con profesionales calificados para decisiones específicas sobre cuidado, salud, asuntos legales y financieros."
            },
        },
        data: {
            cast: [
                { name: "ANA PAULA APOLLONIO", role: `Jessica "Honey" Morales`, bio: "Actriz y actriz de voz brasileña radicada en Estados Unidos desde 2001, trilingüe (inglés, español y portugués de Brasil) con más de dos décadas de experiencia en producciones hispanas y latinoamericanas. Su versatilidad abarca cine, televisión, teatro y un extenso trabajo en doblaje que incluye series como Siren (ABC Family) donde dio voz a Maddie Bishop, Badlands (AMC), y animaciones como South Park (Directora Victoria) y Glitter Force donde interpretó a Kelsey/Glitter Laranja.\n\nEn pantalla, protagonizó el largometraje El Espíritu de la Muerte (Discovery Channel), participó en la serie juvenil Grachi (Nickelodeon), y tuvo roles en El Fantasma de Elena y Una Maid in Manhattan (Telemundo). En doblaje de telenovelas, ha prestado su voz a personajes protagónicos en producciones como Bajo el Mismo Cielo, Señora Acero, El Rostro de la Venganza, A Mulher Perfeita y Dinastia Del Monte, consolidándose como una de las voces más reconocidas y versátiles del doblaje hispano en Estados Unidos.\n\nSu participación en La Última Estación nace de una conexión profundamente personal: acompañó a su madre durante el cáncer terminal como cuidadora principal, experiencia que nutre su interpretación de Jessica con autenticidad emocional y comprensión visceral del agotamiento del cuidador, entendiendo desde dentro la invisibilidad y el peso silencioso del caregiving.", img: "/Ana Paula Apollonio.jpg" },
                { name: `GUILLERMO "MEMO" SAUCEDA`, role: "John Miller", bio: "Actor, locutor y presentador mexicano con más de 40 años de trayectoria internacional. Egresado en Sistemas de Computación Administrativa, completó estudios de postgrado en actuación en el Drama Studio London. Ganador de tres premios Emmy (dos por escritura, uno por edición) como conductor de programas para Telemundo Miami, incluyendo Edición Especial, Mira que TVO y Ay Caramba, además de tres premios SOVAS (Voice Arts Awards).\n\nSu carrera como actor de doblaje incluye ser la voz oficial en español de Mel Gibson (Lethal Weapon 1-2-3, Hamlet, Braveheart), John Travolta (Look Who's Talking 1-2-3) y Kevin Costner (Robin Hood). En televisión ha actuado en series como Burn Notice (USA Network) y Decisiones (Telemundo). Ha producido, escrito y dirigido contenido para Mundo Hispánico con videos que superan el millón de vistas.\n\nLíder comprometido con la comunidad artística, fue Presidente de AFTRA Miami por dos términos consecutivos y co-Presidente de SAG-AFTRA Miami. Actualmente es tesorero de WOVO (World Voices Organization) y presidente de OVU (Organización de Voces Unidas). Su participación en este proyecto surge de haber visto a su madre cuidar a su padre durante años, experiencia que le permite honrar la fortaleza de quienes aman sin límites.", img: "/guillermo memo sauceda.jpg" },
                { name: "SONYA SMITH", role: "Annie Miller", bio: "Actriz estadounidense-venezolana con más de cuatro décadas de trayectoria en telenovelas, series y cine. Nacida en Filadelfia y criada en Venezuela desde pequeña, inició su carrera en Radio Caracas Televisión tras ganar una beca para estudiar con la reconocida maestra Amalia Pérez Díaz, continuando su formación con maestros como Enrique Porte, Jean Carlos Gené y Adda Nocetti.\n\nSu papel protagónico en Cara Sucia (1992) la catapultó al estrellato internacional, siendo vista en más de 80 países. Ha protagonizado producciones para las principales cadenas hispanas incluyendo Olvidarte Jamás, Milagros, Acorralada, Pecados Ajenos, Marido en Alquiler (Telemundo, 2013-2014), Tierra de Reyes (Telemundo, 2014-2015), y Falsa Identidad (Telemundo, 2018-2021). En cine participó en Ladrón que Roba a Ladrón, Bajo la Misma Luna y The Unexpecteds. En streaming, formó parte de El Repatriado y 4Ever (Disney+).\n\nEnfermera graduada e intérprete médica, Sonya combina su pasión artística con el servicio a la salud. Su participación en La Última Estación surge de acompañar a su padre durante el Alzheimer y de la decisión, como familia, de darle el mejor cuidado posible, experiencia que nutre su interpretación de Annie con autenticidad sobre el costo emocional del caregiving.", img: "/Sonya smith.jpg" },
                { name: "AMANDA LIBERTAD", role: "Michelle - Terapeuta Musical", bio: `Cantante, compositora, pianista y actriz cubano-americana con una trayectoria artística multifacética. Comenzó su carrera tocando piano y cantando con el coro de la Universidad de La Habana. Como presentadora de televisión, condujo el programa cubano El Termómetro y posteriormente contribuyó arreglos musicales para la película Por un Puñado de Besos.\n\nHa compuesto e interpretado canciones originales para cine y teatro, incluyendo "No Te Vayas" para el cortometraje Fake, composiciones musicales para las películas Bora y La Llorona: Leyendas Mexicanas de Terror, y la obra teatral El Ruiseñor y la Rosa. Se ha presentado en eventos de prestigio como los Latin Billboard Awards como pianista y corista de reconocidos artistas latinos.\n\nEn teatro, protagonizó Bonita: El Musical y BC7B con Enrique Gou Productions, además de escribir e interpretar su propia obra 15 Días en Microteatro Miami. Su carrera televisiva incluye participaciones en La Rosa de Guadalupe, Doble Sentido y Me Declaro Culpable (Televisa). En La Última Estación, encarna a Michelle, la terapeuta musical que representa el lado humano y sensible del sistema de salud, reconociendo el dolor que no tiene palabras y ofreciendo herramientas de sanación con compasión genuina.`, img: "/amanda libertad.JPG" },
                { name: "EDUARDO IBARROLA", role: "Doctor", bio: "Actor mexicano nacido en 1953 con más de 44 créditos en televisión, cine y teatro desde 1997. Su extensa carrera abarca producciones para las principales cadenas hispanas y plataformas de streaming internacionales.\n\nEntre sus trabajos destacados se encuentran Silvana Sin Lana (Telemundo, 2016-2017 como Benito Mendoza), Vuelve a Mí (2023-2024 como Raymundo Esquivel, IMDb 7.6), Bloodline (Netflix, 2015-2017 como Marco Díaz Sr., IMDb 7.8), American Crime Story (FX, 2018, IMDb 8.4), 100 Días Para Enamorarnos (Telemundo, 2020-2021 como Pedro Franco), Eva Luna (2010-2011 como Ismael González), y Más Sabe el Diablo (2008-2009 como José Antonio Frank), demostrando su versatilidad actoral.\n\nEn cine independiente, participó en Tres Leches (2023), ganador de premio en el Miami Film Festival sobre Alzheimer. En La Última Estación, interpreta al Doctor que ha atendido a John durante 13 años, encarnando la cara humana pero profesional del sistema de salud. Conoce los detalles íntimos de la familia, pero debe ser honesto sobre el pronóstico. Su entrada representa el principio del final y el comienzo del duelo anticipado.", img: "/eduardo ibarrola.jpeg" },
                { name: "FRANCISCO PORRAS", role: "Jefe de Jessica", bio: "Actor, director y profesor de actuación mexicano con más de 27 años de carrera en teatro, cine y televisión. Egresado de la Universidad del Valle de México en Comunicación, completó su formación actoral en el Taller de Teatro Experimental de la Universidad Nacional Autónoma de México y en el Instituto de Liturgia, Música y Arte Cardenal Miranda. Participó con la Compañía Nacional de Teatro y el Instituto Nacional de Bellas Artes.\n\nActor de la compañía In Crescendo, grupo teatral dedicado a espectáculos infantiles y teatro ambulante, también formó parte del colectivo Los Dramaticons de la Escuela Preparatoria Texcoco, donde impartió clases de Literatura y actuación. En 2016 fue reconocido como mejor actor protagónico por la Hispanic Organization of Latin Actors por su trabajo en Cuando Duerme Conmigo. Desde 2023 forma parte de la Sociedad Actoral Hispanoamericana.\n\nEn La Última Estación, interpreta al Jefe de Jessica, encarnando la complejidad del sistema laboral que, sin mala intención, ignora las realidades de los cuidadores. Francisco apoyó este proyecto con entusiasmo inmediato, reconociendo una historia relevante y necesaria que debe ser compartida para visibilizar la realidad de millones de familias.", img: "/francisco porras.jpeg" },
                { name: "ROSA CALZADILLA", role: "Agente de Alquiler de Autos", bio: "Actriz y modelo venezolana que comenzó su carrera artística desde muy joven en el teatro, participando en producciones tanto para público infantil como adulto. En Venezuela, formó parte del elenco de la telenovela Emperatriz (Marte TV), consolidando su presencia en la televisión latinoamericana.\n\nTras establecerse en Estados Unidos, expandió su trayectoria con participaciones en producciones como Eva Luna, El Fantasma de Elena y Behind Closed Doors. En el ámbito comercial, fue modelo principal de la campaña 2020 de Ulta Beauty, una de las cadenas de productos de belleza más importantes de Estados Unidos, ampliando su alcance hacia el modelaje profesional de alto perfil.\n\nEn La Última Estación, Rosa interpreta a la Agente de Alquiler de Autos, personaje que marca el momento en que Jessica toma control de su destino. Su participación surge de una conexión profundamente personal: fue cuidadora principal de su madre durante el Alzheimer hasta su reciente fallecimiento, experiencia que le permite comprender la invisibilidad del cuidador y honrar con autenticidad la resiliencia de quienes aman sin límites.", img: "/rosa calzadilla fomdo blanco.PNG" },
                { name: "MADELEINE E. BELLIARD", role: "Interventora del tren", bio: `Artista multidisciplinaria dominicana-puertorriqueña cuya trayectoria de cuatro décadas abarca teatro, literatura y artes visuales. Comenzó a acumular reconocimiento como escritora a los 13 años, publicando en la prestigiosa revista Mairena mientras estudiaba drama y literatura en la Universidad de Puerto Rico.\n\nEntre 1978 y 2007, trabajó en prácticamente todos los aspectos de la producción teatral: actriz, diseñadora de iluminación y escenografía, asistente de dirección, stage manager y productora. Su obra literaria incluye más de veinte publicaciones disponibles en Amazon. Ha recibido el "Editor's Choice Award" de la Biblioteca del Congreso de Estados Unidos y reconocimiento del 9º Encuentro de Mujeres Poetas. Como acuarelista y escritora, ha viajado por más de diez países latinoamericanos compartiendo su arte.\n\nActualmente también se desempeña como Coach Transformacional, Maestra de Reiki y creadora del método "Flame Neuro-Programming," enfocado en el empoderamiento creativo y el crecimiento personal. En La Última Estación, interpreta a la Interventora, personaje que verifica los boletos pero cuya presencia marca una pausa en el viaje interno de Jessica. Su dedicación de toda una vida a las artes aporta profundidad auténtica a su interpretación, comprendiendo el poder transformador de los momentos cotidianos que interrumpen nuestra travesía.`, img: "/MADELEINE E. BELLIAR .JPG" },
            ],
            crew: [
                { name: "Jackie Zambrano", role: "Guionista, Productora Creativa & Productora Ejecutiva", bio: "Escritora, estratega creativa y productora ejecutiva con más de 35 años de experiencia en narrativa multicultural, campañas sociales y contenido con propósito. Licenciada en Comunicación Social por la Universidad Católica Andrés Bello (UCAB) con diplomado en Comunicación Estratégica.\n\nEn Venezuela lideró el lanzamiento del talk show Geraldo, el primero en ser doblado al español para Latinoamérica, y produjo Zona Descarga Belmont durante sus primeros años, convirtiéndose en un sinónimo de conciertos al aire libre para varias generaciones. Fundadora de Jackie Zambrano LLC y de Hyper Creative Studios en Estados Unidos, ha liderado proyectos para Procter & Gamble y Western Union. También es intérprete certificada en los ámbitos médico e inmigratorio.\n\nLa Última Estación nace de su experiencia personal como cuidadora durante más de 20 años, transformando vivencias profundas en una narrativa cinematográfica sobre el amor, el sacrificio y la posibilidad de sanar.", img: "/Jackie Zambrano.jpg" },
                { name: "José Eduardo Pardo", role: "Director", bio: `Cineasta y director teatral venezolano con 50 años de trayectoria en medios. Su carrera abarca cadenas importantes (Venevisión, RCTV, Discovery Latin, MGM, Univision, Telemundo, Fox) y productoras en tres continentes (TV Planet, Promofilm US, Seal UK, Plaza Sésamo México, Plural/Grupo PRISA España).\n\nComo director y guionista, ha creado la serie de TV "Milagros," los films "Cuento sin Hadas" y "Las Pieles de la Cebolla," con cortometrajes exhibidos en festivales de Montecatini, Leicester y Lausanne. Autor de más de 130 obras teatrales presentadas en Venezuela, USA, Colombia, México, España y Argentina. Dramaturgo publicado: "Teatroando" y "Bailando con las Musas."\n\nEx Director Creativo de Ecuavisa Quito e integrante de los reconocidos grupos teatrales venezolanos Rajatabla y Centro de Directores para el Nuevo Teatro.\n\nEduardo aporta una perspectiva profundamente personal a La Última Estación: fue testigo del camino de su madre, cuidadora de su padre, reconociendo la fortaleza invisible y el sacrificio que inspiraron su visión para este filme.`, img: "/EDUARDO PARDO.JPG" },
                { name: "Alejandro Valladares", role: "Productor & Productor Ejecutivo", bio: `Productor cinematográfico y emprendedor venezolano con sede en Miami, con más de 10 años de experiencia en cine, televisión, videos musicales y comerciales. Cofundador de Vazu LLC junto a Marielena Zuccaro, compañía de soporte de producción especializada en soluciones logísticas para producciones de alto perfil.\n\nSu trabajo en videos musicales ha recibido reconocimiento de la industria, incluyendo una nominación al Latin Grammy por el video "Ale Ale" y reconocimiento en los VMA Awards por "La Patrulla" de Peso Pluma. Ha producido videos para artistas como Marc Anthony, Bad Bunny, Feid y Lil Wayne, y comerciales para marcas globales incluyendo Nike, Adidas, Hyundai, Evian y Zara.\n\nSu trayectoria en cine narrativo incluye trabajo como production manager y line producer en largometrajes como The Provocateur (2022) y Venganza en Las Vegas (2023). Aporta experiencia internacional en presupuestos, logística y coordinación de equipos.`, img: "/Alejandro Valladares.jpg" },
                { name: "Marielena Zuccaro", role: "Directora de Producción", bio: `Marielena Zuccaro es una productora audiovisual radicada en Estados Unidos y cofundadora de VAZU, empresa de servicios de producción que proporciona apoyo integral en set, suministros de producción, vehículos y sistemas de comunicación para facilitar la logística audiovisual sin contratiempos en producciones en el sur de Florida.\n\nDesde 2020, ha trabajado en cine, comerciales, videos musicales y televisión como coordinadora de producción, directora de producción y productora. Su portafolio incluye películas narrativas (Phoenix, The Devil Trap, Paper Empire), promocionales de televisión para Telemundo, Univision y Unimas, campañas de marca con Kenneth Cole, Hyundai, Baptist Health, Lowe's y Zara, además de videos musicales para Bad Bunny, Karol G, Shakira, Ozuna y Juanes.\n\nMarielena aporta estructura, sensibilidad creativa y visión empresarial a cada producción, comprendiendo tanto las exigencias artísticas como las logísticas del cine profesional.`, img: "/MARIELENA ZUCCARO.jpg" },
                { name: "Daniel Bethencourt Lambert", role: "Productor Ejecutivo & Supervisor de Postproducción", bio: "CEO y productor ejecutivo de Mar de Fondo LLC con más de 23 años de experiencia en medios audiovisuales, televisión y contenido digital. Máster en Dirección y Producción de Cine Digital por la Universidad de La Laguna, España.\n\nFue director general de Sun Channel y Sport Plus Channel en Venezuela y gerente de servicios gráficos de Venevisión, responsable del branding de la cadena. Ganador del Golden Promax Los Ángeles 2002 y Silver Latin BDA Argentina 2002. Ha sido jurado en Promax & BDA International y conferencista en foros internacionales de marketing deportivo.\n\nCon sede en Miami desde 2010, se especializa en dirección artística, gestión de proyectos y producción de contenido internacional. Su experiencia ejecutiva en cadenas de televisión de gran formato asegura estándares profesionales mientras opera en realidades presupuestarias del cine independiente.", img: "/Daniel Bethencourt.jpeg" },
                { name: "Charlie Nelson", role: "Director de Fotografía", bio: `Director y cinematógrafo nominado al Latin Grammy, conocido por su trabajo con artistas como Reik, Myke Towers, Ozuna, Camilo, Luis Fonsi y Grupo Firme. Ganador del Video del Año en los Heat Awards 2021 y de dos Premios Pepsi Music 2023, incluido el "Video del Año".\n\nSu video "Ojos Marrones" de Lasso fue reconocido por MTV como uno de los mejores de 2022. En 2023 ganó un Silver Telly Award por su proyecto para Hyundai. Fundador de la productora "We Want To Film", actualmente trabaja en su primer largometraje.\n\nCon sede en Miami, su estilo ecléctico, enfocado en la narrativa, ha sido destacado en los Premios Juventud y Billboard. Para La Última Estación, aporta su habilidad probada para capturar la intimidad emocional en cámara, traduciendo la visión del director en un lenguaje visual que honra la dignidad de los caregivers.`, img: "/Charlie Nelson.jpeg" },
                { name: "Arturo Manuitt", role: "Primer Asistente de Dirección", bio: "Director ganador de dos premios Emmy Regional Suncoast (2019-2022), especializado en comerciales, videos musicales, televisión y cine. Ha dirigido producciones para Nickelodeon Latin America (ISA TKM, GRACHI, Every Witch Way) y Telemundo/NBC (Corazón Valiente, Santa Diabla).\n\nSu trabajo incluye campañas para marcas como Marvel, Paramount, L'Oréal y Universal Pictures, entre ellas Captain Marvel y Mission: Impossible – Fallout. Comenzó su carrera en Venezuela dirigiendo la primera sitcom con audiencia en vivo del país y telenovelas aclamadas internacionalmente para RCTV.\n\nComo primer asistente de dirección en La Última Estación, coordina todos los departamentos del film y gestiona el schedule de rodaje. Sus dos Emmys y su extensa experiencia en múltiples formatos garantizan una ejecución profesional bajo los timelines comprimidos de la producción independiente.", img: "/Arturo Manuitt.webp" },
                { name: "Alejandro Campos", role: "Compositor & Ingeniero de Audio", bio: `Compositor, productor musical, pianista y director de orquesta con sede en Miami. Ganador del premio ASCAP 2004 por "Así es la Vida", reconocida como Mejor Canción Pop del año e interpretada por Olga Tañón.\n\nHa compuesto la música original para 18 telenovelas transmitidas mundialmente, incluyendo La Revancha, Gata Salvaje y Eva Luna, para compañías como Fonovideo y Venevisión Productions. Como productor musical, ha trabajado con artistas de Sony Music como Franco de Vita, Chayanne, Leda Batisti y Axel, entre otros.\n\nSe ha presentado como pianista y director musical junto a figuras como Dionne Warwick, Christopher Cross, Arturo Sandoval y Jon Secada. Actualmente es Compositor en Residencia de la Miami Symphony Orchestra bajo la dirección del Maestro Eduardo Marturet. Para La Última Estación, crea un score original con el piano como instrumento principal.`, img: "/Alejandro Campos.jpg" },
                { name: "Joe Centeno", role: "Director de Arte & Diseñador Gráfico | Branding", bio: "Director de arte senior, ilustrador y diseñador gráfico con más de 30 años de experiencia en dirección creativa y producción visual para cine, televisión, campañas publicitarias y contenido digital. Domina tanto técnicas análogas tradicionales (dibujo a mano alzada, ilustración con tinta, aerógrafo) como la producción digital avanzada.\n\nDesde 2010, es Director de Arte en Jackie Zambrano LLC/Hyper Creative Studios, donde ha creado el branding completo de La Última Estación. Ha desarrollado la identidad visual del talk show Geraldo en español para Latinoamérica, campañas para Western Union en Centroamérica y el Caribe, y branding para artistas como Cris Campocasso, Franco de Vita y Carlos Baute, además del branding de KOATI, película animada en Netflix.\n\nSu trabajo incluye storyboards para producciones de Celuloide y branding para conciertos internacionales en Venezuela (Alanis Morissette, Rubén Blades, Shakira, David Copperfield). Diseñador de la revista Miami para Niños, fusiona identidad visual y narrativa creando experiencias cohesivas.", img: "/Joe Centeno.jpg" },
                { name: "Marisela Rondon", role: "Wardrobe Stylist", bio: `Diseñadora de vestuario y wardrobe stylist venezolana con sede en Miami, con más de 20 años de experiencia en cine, televisión, comerciales y videos musicales. Licenciada en Comunicación Social con especialización en Relaciones Públicas y Publicidad por la Universidad Católica Andrés Bello (UCAB).\n\nSu trabajo incluye el largometraje SIMON THE FILM (2021) dirigido por Diego Vicentini, la miniserie LA FUERZA DE CREER "DULCE SAZÓN" Temporada 4 para Univision (2023) dirigida por Charlie Cartaya, y el cortometraje NYCTO SERIES (2023) dirigido por Ángel Barroeta.\n\nReconocida por su sensibilidad cultural y habilidad para construir personajes y emociones a través del vestuario, su trabajo combina intuición narrativa con atención meticulosa al detalle. Para La Última Estación, crea un vestuario que refleja el viaje emocional de los personajes sin competir con la narrativa.`, img: "/Marisela Rondon.jpg" },
                { name: "Nina Rodrígues", role: "Fotografía y Video Behind the Scenes", bio: `Nina Rodrígues es la fotógrafa y videógrafa detrás de las imágenes que capturan la esencia de La Última Estación. Con más de cinco años documentando historias visuales en la industria del entretenimiento, Nina aporta su sensibilidad artística para preservar cada momento auténtico del rodaje. Su experiencia incluye trabajo como directora creativa y fotógrafa oficial en proyectos musicales de alto perfil, incluyendo colaboraciones con Lagos y Jhay Wheeler (2025), Lil Supa (2025), y CNCO (2022), además de su labor en el programa Conectados de Luis Chataing (2020).\n\nPara este cortometraje, Nina trasciende el rol tradicional de documentalista del set. Su objetivo es capturar no solo las tomas técnicas sino las emociones silenciosas entre escenas: la vulnerabilidad de los actores preparándose, los instantes de conexión humana del equipo, y la atmósfera íntima que define este proyecto. A través de fotografía y video, crea una narrativa visual que complementa la película misma. Su trabajo servirá tanto para el archivo histórico de la producción como para el material promocional y de prensa, honrando la profundidad emocional que La Última Estación representa para todos los involucrados en contar esta historia sobre amor, pérdida y redescubrimiento.`, img: "/nina rodriguez.jpg" },
            ],
            events: [
                { date: "30-11-2025", time: "10:00AM - 12:00PM", location: "Lorem Ipsum text", description: "Lorem Ipsum description", category: "upcoming" },
                { date: "30-11-2025", time: "10:00AM - 12:00PM", location: "Lorem Ipsum text", description: "Lorem Ipsum description", category: "upcoming" },
                { date: "30-11-2025", time: "10:00AM - 12:00PM", location: "Lorem Ipsum text", description: "Lorem Ipsum description", category: "forums" },
            ],
            pastEvents: [
                { title: "Evento", date: "Fecha" },
                { title: "Evento", date: "Fecha" },
                { title: "Evento", date: "Fecha" },
            ],
            products: [
                { title: "Producto", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
                { title: "Producto", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
                { title: "Producto", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
                { title: "Producto", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
            ],
            bloopers: [
                { title: "Corte inesperado" },
                { title: "Risas en el set" },
                { title: "Problemas técnicos" },
            ],
            jury: [
                {
                    name: "Tatiana Ramos",
                    role: "Coordinadora del Jurado",
                    bio: "Doctora en Ciencias de la Información, periodista graduada de la Universidad Católica Andrés Bello (UCAB) y PhD de la Universidad de La Laguna, España. Con más de 40 años de experiencia en el campo editorial y de comunicaciones, reside en Estados Unidos desde hace más de 25 años.\n\nHa participado en numerosos concursos de cuentos, obteniendo premios y reconocimientos, y ha sido publicada en múltiples plataformas literarias y editoriales. Como jurado de concursos literarios, ha contribuido a la evaluación y promoción de voces emergentes y establecidas.\n\nEditora y curadora de varias revistas, ha trabajado ampliamente en la edición y publicación de libros de autores independientes, manteniendo altos estándares editoriales en diversos géneros y formatos. Su trabajo en comunicación incluye el desarrollo de contenido para medios impresos, radio y televisión.\n\nDocente en instituciones de educación superior en Estados Unidos y conferencista en foros académicos y culturales sobre escritura, comunicación, publicación y medios",
                    img: "/tatiana ramos - jurado.png"
                },
                {
                    name: "Alfredo Ruiz Islas",
                    role: "Jurado",
                    bio: "Escritor e historiador mexicano (Ciudad de México, 1975). Autor de siete novelas publicadas y una veintena de relatos aparecidos en revistas literarias y compilaciones en México, Argentina, España, Chile y Estados Unidos. Profesor en la UNAM y la Universidad Iberoamericana.\n\nSus escritos le han valido cerca de veinte premios literarios nacionales e internacionales, incluyendo el Premio Nacional de Literatura para Jóvenes FeNal-Norma (2014), Premio Sexto Continente de Relato Histórico (España), I Certamen Literario de San Antonio de Areco (Argentina) y XXV Concurso Literario Timón de Oro otorgado por la Heroica Escuela Naval Militar (México).\n\nSu novela El viaje a la nada fue incluida en el prestigioso catálogo The White Ravens (2018) de la Internationale Jugendbibliothek de Múnich. Ha recibido reconocimientos de IBBY México y Fundación Cuatrogatos por sus textos destacados. Como historiador y escritor, sus obras abarcan relatos históricos y temáticas juveniles, ganando reconocimiento internacional por su estilo y profundidad narrativa.",
                    img: "/alfredo ruiz islas - jurado.jpg"
                },
                {
                    name: "Carmen Verde Arocha",
                    role: "Jurado",
                    bio: "Poeta, escritora y gerente cultural venezolana. Licenciada en Letras y Magíster en Historia de Venezuela por la Universidad Católica Andrés Bello (UCAB). Directora de Editorial Eclepsidra desde 1994, reconocida como una de las poetas contemporáneas más importantes de Venezuela.\n\nSu obra poética incluye Magdalena en Ginebra (1997), Mieles. Poesía reunida (2005), Canción gótica (2017) y Que el río responda (Visor Libros, 2025). Ha publicado ensayos sobre edición editorial y entrevistas con destacados autores venezolanos.\n\nGanadora del Primer Premio \"Arístides Rojas\" (1999), III Premio Nacional del Libro de Venezuela (2005), Botón FILUC Universidad de Carabobo (2024), Premio de Poesía Antonio L. Bouza, Ciudad de Burgos (2025) y Premio Internacional Excelencia Femenina (2025). Su obra ha sido incluida en múltiples antologías internacionales.\n\nProfesora en UCAB y Universidad Metropolitana de Caracas, ex gerente general de la Casa de la Poesía de Caracas.",
                    img: "/Carmen Verde Arocha - jurado.jpg"
                },
                {
                    name: "Alberto Ferreras",
                    role: "Jurado",
                    bio: "Autor, cineasta y experto en comunicación con trayectoria internacional en múltiples plataformas y géneros narrativos. Su obra explora la identidad latina, el bilingüismo y los cruces culturales entre Estados Unidos, Europa y el mundo hispanohablante.\n\nCreador y director de la serie documental Habla para HBO (2003-2022), pionera en la reflexión audiovisual sobre identidad latina en Estados Unidos y representación del spanglish en medios. En 2022, el Smithsonian Institution inauguró su primera galería dedicada a la experiencia latina con su video-instalación Somos en el National Museum of American History.\n\nHa escrito para Vanity Fair España y contribuyó a la Revista de Occidente —fundada por José Ortega y Gasset— con el ensayo El triunfo del espanglish (octubre 2025). Ha presentado videoinstalaciones inmersivas en el Instituto Cervantes de Nueva York y Lisboa.\n\nDebutó como guionista en Sundance 2015 con ¡Que viva la música! y es autor de B as in Beauty, galardonada con el Premio a la Mejor Ficción en los International Latino Book Awards (2009).",
                    img: "/Alberto Ferreras - jurado.jpeg"
                },
                {
                    name: "Jackie Zambrano",
                    role: "Jurado",
                    bio: "Guionista y productora del cortometraje La Última Estación, con más de 30 años de experiencia como copywriter y creadora de contenido. Licenciada en Comunicación Social por la Universidad Católica Andrés Bello (UCAB) con diplomado en Comunicación Estratégica.\n\nSu trayectoria editorial incluye su rol como editora de la revista Miami para Niños y colaboradora de Orgullosa, la comunidad hispana de Procter & Gamble. Ha escrito para diversas publicaciones, combinando sensibilidad narrativa con rigor editorial.\n\nFundadora de Hyper Creative StudioS, ha liderado proyectos de contenido para marcas como Café Bustelo y Western Union, especializándose en storytelling con propósito e impacto social.\n\nSu experiencia como cuidadora durante más de 20 años inspiró la creación de La Última Estación, obra de ficción que explora el amor, el sacrificio y la resiliencia humana. Su visión como escritora fusiona la verdad emocional con la estructura narrativa, aportando una perspectiva profunda y humana a la evaluación literaria.",
                    img: "/Jackie Zambrano - jurado.png"
                }
            ]
        }
    },
};
