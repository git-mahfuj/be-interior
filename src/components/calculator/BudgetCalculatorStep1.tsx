"use client";
import Image from "next/image";
import React, { ChangeEvent, useState } from "react";
import {
  FiChevronDown,
  FiCheckCircle,
  FiCheck,
  FiPlusCircle,
  FiMinusCircle,
} from "react-icons/fi";
import officeEssential from "@/logo/HomePage/Gemini_Generated_Image_office3.png";
import officePremium from "@/logo/HomePage/Gemini_Generated_Image_office4.png";
import officeLuxury from "@/logo/HomePage/Gemini_Generated_Image_office5.png";
import slideOne from "@/logo/HomePage/Gemini_Generated_Image_home1.png";
import { FaCrown, FaRegStar } from "react-icons/fa";
import { LuGem } from "react-icons/lu";
import { DivergencesProvider } from "sanity";
import { preconnect } from "react-dom";

// --- Data Arrays ---
const options3BHK = [
  { id: "2bhk", label: "2BHK (2 bedrooms, 1 drawing, 1 kitchen)" },
  { id: "3bhk", label: "3BHK (3 bedrooms, 1 drawing, 1 kitchen)" },
  { id: "4bhk", label: "4BHK (4 bedrooms, 1 drawing, 1 kitchen)" },
];

const options4BHK = [
  ...options3BHK,
  { id: "5bhk", label: "5BHK (5 bedrooms, 1 drawing, 1 kitchen)" },
];

const flatSizes = [
  { id: "1200-1349", label: "1200-1349", subOptions: options3BHK },
  { id: "1350-1499", label: "1350-1499", subOptions: options3BHK },
  { id: "1500-1649", label: "1500-1649", subOptions: options3BHK },
  { id: "1650-1799", label: "1650-1799", subOptions: options3BHK },
  { id: "1800-1949", label: "1800-1949", subOptions: options3BHK },
  { id: "1950-2099", label: "1950-2099", subOptions: options3BHK },
  { id: "2100-2249", label: "2100-2249", subOptions: options4BHK },
  { id: "2250-2399", label: "2250-2399", subOptions: options4BHK },
  { id: "2400-2549", label: "2400-2549", subOptions: options4BHK },
  { id: "2550-2699", label: "2550-2699", subOptions: options4BHK },
  { id: "2700+", label: "2700+", subOptions: options4BHK },
];

// Step 2 Data (Categorized for Logic)
const bedroomTypes = ["Master Bedroom", "Child Bedroom", "Guest Bedroom"];
const otherRooms = [
  "Drawing Room",
  "Family Living",
  "Dining Room",
  "Kitchen",
  "Open Kitchen",
  "Toilet",
  "Prayer Space",
];
const allRoomOptions = [...bedroomTypes, ...otherRooms];

const roomsAccessoryTypes = [
  {
    packageType: "essential",
    packageItems: [
      {
        room: "Master Bedroom",
        furniture: {
          slogan: "Dream in style with our personalized bedroom essentials",
          items: [
            "Dress Cabinet",
            "False Ceiling",
            "Study Unit",
            "Bed",
            "Bed Side Table",
            "Dressing Table",
            "Pelmet",
            "Wall-paper (single wall)",
            "Indoor Green",
          ],
        },
        accessories: [
          "Board with HPL laminate finish (matte)",
          "White ceiling (basic designs)",
          "Wall Paper",
          "T5 light",
          "standard mirror",
          "SS soft-close hinges",
          "SS drawer channel",
          "standard hardware",
        ],
      },
      {
        room: "Child Bedroom",
        furniture: {
          slogan:
            "Where imagination meets functionality: Kid-friendly furniture they will love!",
          items: [
            "Dress Cabinet",
            "False Ceiling",
            "Study Unit",
            "Bed",
            "Bed Side Table",
            "Dressing Unit",
            "Pelmet",
            "Wall-paper (single wall)",
            "Indoor Green",
          ],
        },
        accessories: [
          "Board with HPL laminate finish (matte)",
          "White ceiling (basic designs)",
          "Wall Paper",
          "T5 light",
          "standard mirror",
          "SS soft-close hinges",
          "SS drawer channel",
          "standard hardware",
        ],
      },
      {
        room: "Guest Bedroom",
        furniture: {
          slogan: "Stylish and functional: Your guests deserve the best",
          items: [
            "Dress Cabinet",
            "False Ceiling",
            "Study Unit",
            "Bed",
            "Bed Side Table",
            "Dressing Unit",
            "Pelmet",
          ],
        },
        accessories: [
          "Board with HPL laminate finish (matte)",
          "White ceiling (basic designs)",
          "T5 light",
          "standard mirror",
          "SS soft-close hinges",
          "SS drawer channel",
          "standard hardware",
        ],
      },
      {
        room: "Drawing Room",
        furniture: {
          slogan: "The heart of your home, beautifully furnished",
          items: [
            "Book Shelves",
            "Decorative Shelves",
            "False Ceiling",
            "TV Unit with Back Panel",
            "Pelmet",
            "Shoe Rack",
            "Wall paper/ Skim/Texture Paint (single wall)",
            "Decor, Art-work & Painting",
            "Indoor Green",
          ],
        },
        accessories: [
          "Board with HPL laminate finish (matte)",
          "White ceiling (basic designs)",
          "T5 light",
          "metal Channel",
          "Wall Paper",
          "SS soft-close hinges",
          "SS drawer channel",
          "standard hardware",
        ],
      },
      {
        room: "Family Living",
        furniture: {
          slogan:
            "Cozy, functional, and stylish: Furniture for unforgettable family moments",
          items: [
            "Book Shelves",
            "False Ceiling",
            "Wall Panel",
            "Pelmet",
            "Wall paper/ Skim/Texture Paint (single wall)",
            "Indoor Green",
          ],
        },
        accessories: [
          "HPL Laminate finish (Matte)",
          "White ceiling (basic designs)",
          "White board paneling",
          "Wall Paper",
          "T5 light",
          "SS soft-close hinges",
          "standard hardware",
        ],
      },
      {
        room: "Dining Room",
        furniture: {
          slogan: "Dine in luxury: Furniture that complements every meal",
          items: [
            "Dining wagon",
            "False Ceiling",
            "Dining Basin",
            "Basin Cabinet With paneling",
            "Pelmet",
            "Fridge Cabinet",
            "Skim/Texture Paint (single wall)",
            "Indoor Green",
          ],
        },
        accessories: [
          "HPL Laminate finish (Matte)",
          "White ceiling (basic designs)",
          "textured Paint",
          "Glass Door & Shelves",
          "Marble top",
          "T5 light",
          "SS soft-close hinges",
          "SS drawer channel",
          "standard hardware",
        ],
      },
      {
        room: "Kitchen",
        furniture: {
          slogan:
            "Smart designs, smarter kitchens: Organize your culinary haven",
          items: [
            "Kitchen Upper Cabinet",
            "Kitchen Middle Cabinet",
            "Kitchen Lower Cabinet",
          ],
        },
        accessories: [
          "HPL Laminate finish (glossy)",
          "PVC board",
          "Glass Door & Shelves",
          "profile handle",
          "profile edging",
          "SS soft-close hinges",
          "SS drawer channel",
          "standard hardware",
        ],
      },
      {
        room: "Open Kitchen",
        furniture: {
          slogan: "Style meets function: Furniture for seamless open kitchens",
          items: [
            "Kitchen Upper Cabinet",
            "Kitchen Middle Cabinet",
            "Kitchen Lower Cabinet",
            "Breakfast Table",
          ],
        },
        accessories: [
          "HPL Laminate finish (glossy)",
          "White ceiling (basic designs)",
          "Marble top",
          "Glass Shelves",
          "profile handle",
          "profile edging",
          "SS soft-close hinges",
          "SS drawer channel",
          "standard hardware",
        ],
      },
      {
        room: "Toilet",
        furniture: {
          slogan: "Start and end your day in a perfectly furnished retreat",
          items: ["Shower Encloser", "Basin Cabinet", "Mirror (Basic)"],
        },
        accessories: [
          "HPL Laminate finish (Matte)",
          "PVC Board",
          "10mm glass",
          "standard quality accessories",
          "SS soft-close hinges",
          "Sliding /hinged door (tempered)",
          "Mirror",
          "standard hardware",
        ],
      },
      {
        room: "Prayer Space",
        furniture: {
          slogan: "Serenity starts here: Furniture for your sacred space",
          items: [
            "Wall Panel",
            "False Ceiling",
            "Low Height cabinet",
            "Wall-paper (single wall)",
            "Indoor Green",
          ],
        },
        accessories: [
          "HPL Laminate finish (Matte)",
          "White ceiling (basic designs)",
          "White board paneling",
          "T5 light",
          "Wall Paper",
          "SS soft-close hinges",
          "standard hardware",
        ],
      },
    ],
  },
  {
    packageType: "premium",
    packageItems: [
      {
        room: "Master Bedroom",
        furniture: {
          slogan:
            "Your sanctuary, redefined: Elegant furniture for the ultimate retreat",
          items: [
            "Dress Cabinet",
            "False Ceiling",
            "Study Unit",
            "Bed",
            "Bed Side Table",
            "Dressing Table",
            "Bed Back",
            "Pelmet",
            "Wall-paper (single wall)",
            "Existing Door Color (Polish)",
            "Indoor Green",
          ],
        },
        accessories: [
          "Board with HPL laminate finish",
          "Design ceiling",
          "Wall Paper",
          "T5 light",
          "Spot light",
          "metal Channel",
          "mirror",
          "SS soft-close hinges",
          "SS drawer channel",
          "Heigh Quality hardware",
        ],
      },
      {
        room: "Child Bedroom",
        furniture: {
          slogan: "Crafting spaces for dreams to grow and memories to flourish",
          items: [
            "Dress Cabinet",
            "False Ceiling",
            "Study Unit",
            "Bed",
            "Bed Side Table",
            "Dressing Table",
            "Bed Back",
            "Pelmet",
            "Wall-paper (single wall)",
            "Existing Door Color (Polish)",
            "Indoor Green",
          ],
        },
        accessories: [
          "Board with HPL laminate finish",
          "Design ceiling",
          "Wall Paper",
          "T5 light",
          "Spot light",
          "metal Channel",
          "mirror",
          "SS soft-close hinges",
          "SS drawer channel",
          "Heigh Quality hardware",
        ],
      },
      {
        room: "Guest Bedroom",
        furniture: {
          slogan:
            "Welcoming comfort: Furniture that makes every guest feel at home",
          items: [
            "Dress Cabinet",
            "False Ceiling",
            "Study Unit",
            "Bed",
            "Bed Side Table",
            "Dressing Table",
            "Pelmet",
            "Wall-paper (single wall)",
            "Existing Door Color (Polish)",
            "Indoor Green",
          ],
        },
        accessories: [
          "Board with HPL laminate finish",
          "Design ceiling",
          "Wall Paper",
          "T5 light",
          "Spot light",
          "mirror",
          "SS soft-close hinges",
          "SS drawer channel",
          "Heigh Quality hardware",
        ],
      },
      {
        room: "Drawing Room",
        furniture: {
          slogan:
            "Showcase your style with a drawing room that speaks elegance",
          items: [
            "Book Shelves",
            "Decorative Shelves",
            "False Ceiling",
            "Decorative Ceiling",
            "TV Unit with Back Panel",
            "Wall Panel",
            "Pelmet",
            "Shoe Rack",
            "Wall paper/ Skim/Texture Paint (single wall)",
            "Existing Door Color (Polish)",
            "Decor, Art-work & Painting",
            "Indoor Green",
          ],
        },
        accessories: [
          "Board with HPL laminate finish",
          "Design ceiling",
          "T5 light",
          "Spot light",
          "metal Channel",
          "Glass Shelves",
          "Wall Paper",
          "SS soft-close hinges",
          "SS drawer channel",
          "Heigh Quality hardware",
        ],
      },
      {
        room: "Family Living",
        furniture: {
          slogan: "Gather, relax, and enjoy in a living room tailored for you",
          items: [
            "Book Shelves",
            "Decorative Shelves",
            "False Ceiling",
            "TV Unit with Back Panel",
            "Wall Panel",
            "Pelmet",
            "Wall paper/ Skim/Texture Paint (single wall)",
            "Existing Door Color (Polish)",
            "Indoor Green",
          ],
        },
        accessories: [
          "HPL Laminate finish",
          "Design ceiling",
          "White board paneling",
          "Wall Paper",
          "Glass Shelves",
          "T5 light",
          "Spot light",
          "SS soft-close hinges",
          "Heigh Quality hardware",
        ],
      },
      {
        room: "Dining Room",
        furniture: {
          slogan:
            "Set the table for style and comfort with our dining solutions",
          items: [
            "Dining wagon",
            "Decorative Ceiling",
            "False Ceiling",
            "Dining Basin",
            "Basin Cabinet With paneling",
            "Pelmet",
            "Fridge Cabinet",
            "Skim/Texture Paint (single wall)",
            "Existing Door Color (Polish)",
            "Indoor Green",
          ],
        },
        accessories: [
          "HPL Laminate finish",
          "Design ceiling",
          "White board paneling",
          "textured Paint",
          "Glass Door & Shelves",
          "T5 light",
          "Spot light",
          "Marble top",
          "SS soft-close hinges",
          "SS drawer channel",
          "Heigh Quality hardware",
        ],
      },
      {
        room: "Kitchen",
        furniture: {
          slogan:
            "Cook, store, and impress with furniture built for modern kitchens",
          items: [
            "Kitchen Upper Cabinet",
            "Kitchen Middle Cabinet",
            "Kitchen Lower Cabinet",
            "Modifying Door",
            "Existing Door Color (Polish)",
          ],
        },
        accessories: [
          "HPL Laminate finish",
          "PVC board",
          "Glass Door & Shelves",
          "Profile glass",
          "profile handle",
          "profile edging",
          "SS soft-close hinges",
          "SS drawer channel",
          "Heigh Quality hardware",
        ],
      },
      {
        room: "Open Kitchen",
        furniture: {
          slogan: "Where culinary art meets aesthetic design",
          items: [
            "Kitchen Upper Cabinet",
            "Kitchen Middle Cabinet",
            "Kitchen Lower Cabinet",
            "Breakfast Table",
            "False Ceiling",
            "Indoor Green",
            "Feature light (Basic)",
          ],
        },
        accessories: [
          "HPL Laminate finish",
          "Design ceiling",
          "Marble top",
          "Glass Shelves",
          "Profile glass",
          "profile handle",
          "profile edging",
          "T5 light",
          "Spot light",
          "SS soft-close hinges",
          "SS drawer channel",
          "Heigh Quality hardware",
        ],
      },
      {
        room: "Toilet",
        furniture: {
          slogan:
            "Luxury meets utility: Furniture that transforms your bathroom space",
          items: [
            "Shower Encloser",
            "Basin Cabinet",
            "Mirror",
            "Basin (Basic)",
          ],
        },
        accessories: [
          "HPL Laminate finish",
          "PVC Board",
          "T5 light",
          "Spot light",
          "10mm glass",
          "standard quality accessories",
          "SS soft-close hinges",
          "Sliding /hinged door (tempered)",
          "Mirror",
          "Heigh Quality hardware",
        ],
      },
      {
        room: "Prayer Space",
        furniture: {
          slogan: "Create a corner of calm with furniture that inspires peace",
          items: [
            "Wall Panel",
            "False Ceiling",
            "Low Height Cabinet",
            "Wall-paper (single wall)",
            "Indoor Green",
          ],
        },
        accessories: [
          "HPL Laminate finish",
          "Design ceiling",
          "Islamic theme paneling",
          "Wall Paper",
          "Glass Shelves",
          "SS soft-close hinges",
          "Heigh Quality hardware",
        ],
      },
    ],
  },
  {
    packageType: "luxury",
    packageItems: [
      {
        room: "Master Bedroom",
        furniture: {
          slogan: "Transform your sleep space into a luxurious escape",
          items: [
            "Door Cabinetry & Shelves",
            "False Ceiling",
            "Decorative Ceiling",
            "Study Unit",
            "Bed",
            "Bed Side Table",
            "Dressing Table",
            "Bed Back",
            "Wall Panel",
            "Pelmet",
            "Wall-paper (single wall)",
            "Existing Door Color (Lacquer)",
            "Decor, Art-work & Painting",
            "Indoor Green",
          ],
        },
        accessories: [
          "Board with HPL laminate finish",
          "Luxury ceiling",
          "Wall Paper",
          "T5 light",
          "Spot light",
          "Profile light",
          "metal Channel",
          "mirror",
          "Artificial Leather",
          "Heigh Quality Foam",
          "SS soft-close hinges",
          "SS drawer channel",
          "Branded hardware",
          "moisture-resistant",
        ],
      },
      {
        room: "Child Bedroom",
        furniture: {
          slogan:
            "Furniture designed to spark creativity and joy for your little ones",
          items: [
            "Door Cabinetry & Shelves",
            "False Ceiling",
            "Decorative Ceiling",
            "Study Unit",
            "Bed",
            "Bed Side Table",
            "Dressing Table",
            "Bed Back",
            "Wall Panel",
            "Pelmet",
            "Wall-paper (single wall)",
            "Existing Door Color (Lacquer)",
            "Indoor Green",
          ],
        },
        accessories: [
          "Board with HPL laminate finish",
          "Luxury ceiling",
          "Wall Paper",
          "T5 light",
          "Spot light",
          "Profile light",
          "metal Channel",
          "mirror",
          "Artificial Leather",
          "Heigh Quality Foam",
          "SS soft-close hinges",
          "SS drawer channel",
          "Branded hardware",
          "moisture-resistant",
        ],
      },
      {
        room: "Guest Bedroom",
        furniture: {
          slogan: "Create a lasting impression with our guest-ready designs",
          items: [
            "Door Cabinetry & Shelves",
            "False Ceiling",
            "Decorative Ceiling",
            "Study Unit",
            "Bed",
            "Bed Side Table",
            "Dressing Table",
            "Bed Back",
            "Pelmet",
            "Wall-paper (single wall)",
            "Existing Door Color (Lacquer)",
            "Indoor Green",
          ],
        },
        accessories: [
          "Board with HPL laminate finish",
          "Luxury ceiling",
          "Wall Paper",
          "T5 light",
          "Spot light",
          "Profile light",
          "metal Channel",
          "mirror",
          "SS soft-close hinges",
          "SS drawer channel",
          "Branded hardware",
          "moisture-resistant",
        ],
      },
      {
        room: "Drawing Room",
        furniture: {
          slogan:
            "Set the stage for unforgettable gatherings with exquisite designs",
          items: [
            "Book Shelves",
            "Decorative Shelves",
            "False Ceiling",
            "Decorative Ceiling",
            "TV Unit with Back Panel",
            "Wall Panel",
            "Pelmet",
            "Shoe Rack",
            "Wall-paper (single wall)",
            "Existing Door Color (Lacquer)",
            "Decor, Art-work & Painting",
            "Indoor Green",
          ],
        },
        accessories: [
          "HPL Laminate finish",
          "Luxury ceiling",
          "Design paneling",
          "Wall Paper",
          "Glass Shelves",
          "T5 light",
          "Spot light",
          "Profile light",
          "metal Channel",
          "mirror sheet",
          "SS soft-close hinges",
          "Branded hardware",
        ],
      },
      {
        room: "Family Living",
        furniture: {
          slogan:
            "Turn your family space into the perfect hub of comfort and style",
          items: [
            "Book Shelves",
            "Decorative Shelves",
            "False Ceiling",
            "TV Unit with Back Panel",
            "Wall Panel",
            "Pelmet",
            "Divan",
            "Wall paper/ Skim/Texture Paint (single wall)",
            "Existing Door Color (Lacquer)",
            "Decor, Art work & Painting",
            "Indoor Green",
          ],
        },
        accessories: [
          "HPL Laminate finish",
          "Luxury ceiling",
          "Design paneling",
          "Wall Paper",
          "Glass Shelves",
          "T5 light",
          "Spot light",
          "Profile light",
          "Artificial Leather",
          "Heigh Quality Foam",
          "SS soft-close hinges",
          "Branded hardware",
        ],
      },
      {
        room: "Dining Room",
        furniture: {
          slogan: "Because great conversations deserve great spaces",
          items: [
            "Dining wagon",
            "Consul Table",
            "Decorative Ceiling",
            "False Ceiling",
            "Dining Basin",
            "Basin Cabinet With paneling",
            "Pelmet",
            "Fridge Cabinet",
            "Skim/Texture Paint (single wall)",
            "Existing Door Color (Lacquer)",
            "Decor, Art-work & Painting",
            "Indoor Green",
          ],
        },
        accessories: [
          "HPL Laminate finish",
          "Luxury ceiling",
          "Design paneling",
          "textured Paint",
          "Profile Glass",
          "T5 light",
          "Spot light",
          "Profile light",
          "Marble top",
          "SS soft-close hinges",
          "SS drawer channel",
          "Branded hardware",
        ],
      },
      {
        room: "Kitchen",
        furniture: {
          slogan: "Innovative kitchen solutions to match your lifestyle",
          items: [
            "Kitchen Upper Cabinet",
            "Kitchen Middle Cabinet",
            "Kitchen Lower Cabinet",
            "Modifying Door",
            "Fridge Cabinet",
            "Existing Door Color (Lacquer)",
          ],
        },
        accessories: [
          "HPL Laminate finish",
          "PVC board",
          "Glass Door & Shelves",
          "Profile glass",
          "profile handle",
          "profile edging",
          "T5 light",
          "Profile light",
          "SS soft-close hinges",
          "SS drawer channel",
          "Branded hardware",
        ],
      },
      {
        room: "Open Kitchen",
        furniture: {
          slogan:
            "Expand your kitchens charm with thoughtfully crafted furniture",
          items: [
            "Kitchen Upper Cabinet",
            "Kitchen Middle Cabinet",
            "Kitchen Lower Cabinet",
            "Breakfast Table",
            "False Ceiling",
            "Indoor Green",
            "Feature light",
          ],
        },
        accessories: [
          "HPL Laminate finish",
          "Luxury ceiling",
          "sunstone top",
          "Glass Shelves",
          "Profile glass",
          "profile handle",
          "profile edging",
          "T5 light",
          "Spot light",
          "Profile light",
          "SS soft-close hinges",
          "SS drawer channel",
          "Branded hardware",
        ],
      },
      {
        room: "Toilet",
        furniture: {
          slogan: "Elegant storage solutions for a clutter-free washroom",
          items: ["Shower Encloser", "Basin Cabinet", "Mirror", "Basin"],
        },
        accessories: [
          "HPL Laminate finish",
          "PVC Board",
          "10mm glass",
          "Heigh quality accessories",
          "SS soft-close hinges",
          "Sliding /hinged door (tempered)",
          "Mirror",
          "basin (premium)",
        ],
      },
      {
        room: "Prayer Space",
        furniture: {
          slogan: "Crafted for your moments of devotion and reflection",
          items: [
            "Wall Panel",
            "False Ceiling",
            "Low Height Cabinet",
            "Decorative Ceiling",
            "Wall-paper (single wall)",
            "Indoor Green",
          ],
        },
        accessories: [
          "HPL Laminate finish",
          "Luxury ceiling",
          "Islamic theme paneling",
          "Wall Paper",
          "Glass Shelves",
          "T5 light",
          "Spot light",
          "Profile light",
          "SS soft-close hinges",
          "Branded hardware",
        ],
      },
    ],
  },
];

interface Formtype {
  name: string;
  phone: string;
  email: string;
}

type FormErrors = Partial<Formtype>;

const BudgetCalculator = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [errorModal, setErrorModal] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [selectedSize, setSelectedSize] = useState("");
  const [selectedBHK, setSelectedBHK] = useState("");
  const [openAccordion, setOpenAccordion] = useState("");

  const [selectedRooms, setSelectedRooms] = useState<Record<string, number>>(
    {},
  );

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Step 3
  const [selectedPackage, setSelectedPackage] = useState("");
  // Step 4
  const [formData, setFormData] = useState<Formtype>({
    name: "",
    phone: "",
    email: "",
  });
  const [formError, setFormError] = useState<FormErrors>({});
  // --- Helpers ---
  const triggerError = (msg: string) => {
    setErrorMsg(msg);
    setErrorModal(true);
    setTimeout(() => setErrorModal(false), 3000);
  };

  const getTotalBedrooms = () => {
    return bedroomTypes.reduce(
      (sum, room) => sum + (selectedRooms[room] || 0),
      0,
    );
  };

  const maxBedrooms = parseInt(selectedBHK) || 0;

  // --- Handlers ---
  const handleNext = () => {
    if (currentStep === 1) {
      if (!selectedSize || !selectedBHK) {
        return triggerError(
          "Please select both size and BHK type before proceeding.",
        );
      }
    } else if (currentStep === 2) {
      if (Object.keys(selectedRooms).length === 0) {
        return triggerError("Please select at least one room to design.");
      }
    } else if (currentStep === 3) {
      if (!selectedPackage) {
        return triggerError("Please select a package.");
      }
    }
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
    setCurrentStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
    setCurrentStep((prev) => prev - 1);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (formError[name as keyof Formtype]) {
      setFormError((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    let tempErrors: FormErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(?:\+88|88)?(01[3-9]\d{8})$/;
    if (!formData.name.trim()) {
      tempErrors.name = "Name is Required";
    }
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Invalid email format";
    }

    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone.replace(/[-\s]/g, ""))) {
      tempErrors.phone = "Valid BD phone number required (e.g. 017xxxxxxxx)";
    } else if (formData.phone.length > 11) {
      tempErrors.phone = "Phone number can't be over 11 charecters";
    }

    setFormError(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (validateForm()) {
        setIsSubmitted(true);
        setCurrentStep(5);
        if (process.env.NODE_ENV === "development") {
          console.log("Final Data:", {
            selectedSize,
            selectedBHK,
            selectedRooms,
            selectedPackage,
            formData,
          });
        }
        alert("Form Submitted Successfully!");
        window.scrollTo({
          top: 0,
          behavior: "auto",
        });
        if (process.env.NODE_ENV === "development") {
          console.log("Form Submitted successfully");
        }
      }
    } catch (err: any) {
      if (process.env.NODE_ENV === "development") {
        console.log("calculate err", err.message);
      }
    }
  };

  // --- Step 2 Room Logic ---
  const toggleRoomCheckbox = (room: string) => {
    const isBedroom = bedroomTypes.includes(room);
    const currentQty = selectedRooms[room] || 0;

    if (currentQty > 0) {
      const newRooms = { ...selectedRooms };
      delete newRooms[room];
      setSelectedRooms(newRooms);
    } else {
      if (isBedroom) {
        if (getTotalBedrooms() >= maxBedrooms) {
          return triggerError(
            `You can only select up to ${maxBedrooms} bedrooms based on your ${selectedBHK.toUpperCase()} selection.`,
          );
        }
      }
      setSelectedRooms({ ...selectedRooms, [room]: 1 });
    }
  };

  const incrementRoom = (e: React.MouseEvent, room: string) => {
    e.stopPropagation();
    const isBedroom = bedroomTypes.includes(room);
    const currentQty = selectedRooms[room] || 0;

    if (isBedroom) {
      if (getTotalBedrooms() >= maxBedrooms) {
        return triggerError(
          `Maximum limit reached! You can't add more than ${maxBedrooms} bedrooms.`,
        );
      }
    } else if (room === "Toilet") {
      // NEW LOGIC: Allow up to 4 toilets
      if (currentQty >= 4) {
        return triggerError("You can only add up to 4 toilets.");
      }
    } else {
      // All other rooms are limited to 1
      if (currentQty >= 1) return;
    }

    setSelectedRooms({
      ...selectedRooms,
      [room]: currentQty + 1,
    });
  };

  const decrementRoom = (e: React.MouseEvent, room: string) => {
    e.stopPropagation();
    const currentQty = selectedRooms[room] || 0;
    if (currentQty > 1) {
      setSelectedRooms({ ...selectedRooms, [room]: currentQty - 1 });
    } else if (currentQty === 1) {
      const newRooms = { ...selectedRooms };
      delete newRooms[room];
      setSelectedRooms(newRooms);
    }
  };

  // --- Render Steps Functions ---
  const renderStep1 = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
      {flatSizes.map((size) => {
        const isSelected = selectedSize === size.id;
        const isOpen = openAccordion === size.id;
        return (
          <div key={size.id} className="flex flex-col">
            <div
              onClick={() => {
                setSelectedSize(size.id);
                setOpenAccordion(isOpen ? "" : size.id);
                if (selectedSize !== size.id) setSelectedBHK("");
              }}
              className={`relative flex items-center justify-between px-5 py-4 bg-white rounded-xl cursor-pointer transition-all duration-300 ${isSelected ? "border-2 border-[#C87A31] shadow-[0_10px_20px_rgba(200,122,49,0.15)] transform scale-[1.02]" : "border-[2px] border-transparent opacity-95 hover:shadow-md"}`}
            >
              <div className="flex flex-col">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${isSelected ? "border-[#C87A31]" : "border-gray-300"}`}
                  >
                    {isSelected && (
                      <div className="w-2.5 h-2.5 rounded-full bg-[#C87A31]" />
                    )}
                  </div>
                  <span
                    className={`font-semibold md:text-lg ${isSelected ? "text-[#111111]" : "text-gray-700"}`}
                  >
                    {size.label}
                  </span>
                </div>
                {isSelected && selectedBHK && !isOpen && (
                  <div className="ml-8 mt-1 flex items-center gap-1.5 text-xs font-medium text-[#C87A31]">
                    <FiCheckCircle />
                    <span>{selectedBHK.toUpperCase()} Selected</span>
                  </div>
                )}
              </div>
              <FiChevronDown
                className={`text-xl transition-transform duration-300 ${isOpen ? "rotate-180 text-[#C87A31]" : "text-gray-400"}`}
              />
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"}`}
            >
              <div className="flex flex-col gap-2 p-4 ml-2 bg-[#111111] rounded-xl border border-[#C87A31]/30">
                {size.subOptions.map((bhk) => (
                  <label
                    key={bhk.id}
                    className="flex items-start gap-3 cursor-pointer p-2 hover:bg-white/10 rounded-lg"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedBHK(bhk.id);
                      setOpenAccordion("");
                    }}
                  >
                    <div
                      className={`w-4 h-4 mt-1 rounded-full border flex items-center justify-center shrink-0 ${selectedBHK === bhk.id ? "border-[#C87A31] bg-[#C87A31]" : "border-white/40"}`}
                    >
                      {selectedBHK === bhk.id && (
                        <div className="w-1.5 h-1.5 rounded-full bg-white" />
                      )}
                    </div>
                    <span
                      className={`text-sm ${selectedBHK === bhk.id ? "text-[#C87A31] font-semibold" : "text-white/90"}`}
                    >
                      {bhk.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  const renderStep2 = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
      {allRoomOptions.map((room, idx) => {
        const qty = selectedRooms[room] || 0;
        const isSelected = qty > 0;
        const isBedroom = bedroomTypes.includes(room);
        const isToilet = room === "Toilet";

        // Show Plus Button if it's a bedroom or a toilet (tolets can go up to 4)
        const canIncrement = isBedroom || isToilet;

        return (
          <div
            key={idx}
            onClick={() => toggleRoomCheckbox(room)}
            className={`flex items-center justify-between px-5 py-4 bg-white rounded-xl cursor-pointer transition-all duration-300 ${isSelected ? "border-[2px] border-[#C87A31] shadow-md" : "border-[2px] border-white/50 hover:border-[#111111]/20"}`}
          >
            <div className="flex items-center gap-4">
              <div
                className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-colors ${isSelected ? "bg-[#C87A31] border-[#C87A31]" : "border-gray-300"}`}
              >
                {isSelected && <FiCheck className="text-white text-sm" />}
              </div>
              <span
                className={`font-medium ${isSelected ? "text-[#C87A31]" : "text-gray-700"}`}
              >
                {room}
              </span>
            </div>

            {isSelected && (
              <div className="flex items-center gap-3">
                <button
                  onClick={(e) => decrementRoom(e, room)}
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  <FiMinusCircle className="text-xl" />
                </button>
                <span className="font-semibold text-lg text-[#111111] w-4 text-center">
                  {qty}
                </span>
                {canIncrement ? (
                  <button
                    onClick={(e) => incrementRoom(e, room)}
                    className="text-[#C87A31] hover:text-[#a06227] transition-colors"
                  >
                    <FiPlusCircle className="text-xl" />
                  </button>
                ) : (
                  <button
                    className="text-gray-200 cursor-not-allowed"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FiPlusCircle className="text-xl" />
                  </button>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );

  const renderStep3 = () => {
    const packages = [
      {
        id: "essential",
        name: "Essential",
        img: officeEssential,
        icon: <FaRegStar className="text-white text-2xl opacity-90" />,
        headerBg: "from-[#ff6b8b] to-[#ff8e53]",
        features: [
          "Affordable Pricing",
          "Functional 2D Layout",
          "Convenient 3D Design",
          "Standard Accessories",
          "Durable Materials",
          "Execution",
        ],
      },
      {
        id: "premium",
        name: "Premium",
        img: officePremium,
        icon: <LuGem className="text-white text-2xl opacity-90" />,
        headerBg: "from-[#20b2aa] to-[#48d1cc]",
        features: [
          "Value Driven Pricing",
          "Functional 2D Layout",
          "High-end 3D Design",
          "Wide Range Accessories",
          "High Grade Materials",
          "Laminate Finish",
          "Execution",
        ],
        isFeatured: true,
      },
      {
        id: "luxury",
        name: "Luxury",
        img: officeLuxury,
        icon: <FaCrown className="text-white text-2xl opacity-90" />,
        headerBg: "from-[#ff9f43] to-[#ffbe76]",
        features: [
          "Exclusive Pricing",
          "Functional 2D Layout",
          "Luxury 3D Design",
          "Branded Accessories",
          "Premium Materials",
          "Laminate, Acrylic & Mirror Sheet Finish",
          "Designer Decorative Items",
          "Execution",
        ],
      },
      {
        id: "custom",
        name: "Custom",
        img: slideOne,
        icon: <FiPlusCircle className="text-white text-2xl opacity-90" />,
        headerBg: "from-[#2d3436] to-[#000000]",
        desc: "Design a package that fits you best",
        features: [
          "Fully Personalized Layout",
          "Custom 3D Design",
          "Material selection of your choice",
          "Our Designers will get in touch to customise your package.",
        ],
      },
    ];

    return (
      <div className="w-full py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center font-poppins">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 items-stretch justify-center w-full max-w-7xl px-2 lg:px-0">
          {packages.map((pkg, index) => {
            const isSelected = selectedPackage === pkg.id;
            return (
              <div
                key={index}
                onClick={() => setSelectedPackage(pkg.id)}
                className={`cursor-pointer w-full bg-white rounded-[32px] shadow-[0_15px_40px_rgba(0,0,0,0.04)] border-2 overflow-hidden transition-all duration-500 flex flex-col group relative
              ${pkg.isFeatured ? "lg:-translate-y-6 lg:shadow-[0_25px_60px_rgba(54,88,86,0.15)] z-10" : "hover:-translate-y-2 z-0"}
              ${isSelected ? "border-[#C87A31] ring-4 ring-[#C87A31]/20 shadow-2xl" : "border-zinc-100 hover:border-zinc-300"}
            `}
              >
                <div
                  className={`relative bg-gradient-to-br ${pkg.headerBg} pt-8 pb-14 px-6 text-white flex justify-between items-center overflow-hidden`}
                >
                  <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[radial-gradient(circle_at_bottom_left,var(--tw-gradient-stops))] from-white via-transparent to-transparent" />

                  <div className="z-10">
                    <h3 className="text-xl sm:text-2xl font-black tracking-wide font-montagu mb-1">
                      {pkg.name}
                    </h3>
                  </div>

                  <div className="z-10 w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-inner shrink-0">
                    {pkg.icon}
                  </div>
                </div>

                <div className="px-6 -mt-8 relative z-20">
                  <div className="w-full aspect-[16/10] relative rounded-2xl overflow-hidden bg-zinc-100 shadow-md border-2 border-white">
                    <Image
                      src={pkg.img || "/img.jpg"}
                      alt={`${pkg.name} package`}
                      fill
                      sizes="(max-w-768px) 100vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      priority={pkg.isFeatured}
                    />
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  {pkg.desc && (
                    <p className="text-xs font-semibold text-zinc-500 mb-4 text-center">
                      {pkg.desc}
                    </p>
                  )}
                  <ul className="space-y-3.5 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-zinc-600 text-sm font-medium"
                      >
                        <span className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full bg-amber-50 border border-amber-300 flex items-center justify-center text-[10px] text-amber-600 font-bold">
                          ✓
                        </span>
                        <span className="leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div
                    className={`mt-auto w-full text-center py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${isSelected ? "bg-[#C87A31] text-white shadow-md" : "bg-zinc-100 text-zinc-500 group-hover:bg-zinc-200"}`}
                  >
                    {isSelected ? "Selected" : "Select Package"}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderStep4 = () => {
    return (
      <div
        className={`flex flex-col md:flex-row gap-8 items-center justify-center max-w-4xl mx-auto bg-white p-8 rounded-3xl shadow-sm`}
      >
        <div className="w-full relative md:w-1/2 flex items-center justify-center bg-[#FAF5E9] rounded-2xl p-8 min-h-[300px]">
          <Image
            src={officePremium}
            alt="img"
            fill
            quality={100}
            className="object-cover rounded-lg"
          />
        </div>
        <form
          className="w-full md:w-1/2 flex flex-col gap-4"
          onSubmit={handleSubmit}
        >
          <p className="text-center text-gray-500 font-medium mb-2">
            Your free quote is just a few clicks away!
          </p>
          {[
            { name: "name", type: "text", placeholder: "Name" },
            { name: "phone", type: "text", placeholder: "Phone" },
            { name: "email", type: "email", placeholder: "E-mail" },
          ].map((field) => (
            <div key={field.name} className="flex flex-col w-full">
              <input
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                value={formData[field.name as keyof Formtype]}
                onChange={handleChange}
                className={`w-full px-4 py-3.5 bg-white text-zinc-800 rounded-xl  outline-primary/80 transition-all placeholder:text-zinc-400 font-medium text-sm sm:text-base border-2 ${
                  formError[field.name as keyof Formtype]
                    ? "border-red-500 bg-red-50/5 focus:bg-white"
                    : "border-black focus:border-primary/40"
                }`}
              />
              {formError[field.name as keyof Formtype] && (
                <span className="text-red-400 text-xs mt-1.5 ml-1 font-medium">
                  {formError[field.name as keyof Formtype]}
                </span>
              )}
            </div>
          ))}
          <button
            type="submit"
            className="w-full mt-2 bg-[#111111] hover:bg-[#C87A31] text-white font-bold py-4 rounded-xl transition-colors duration-300 shadow-md"
          >
            Submit Form
          </button>
          <p className="text-[10px] text-gray-400 text-center mt-2">
            By submitting this form, you agree to the Privacy Policy & Terms and
            conditions.
          </p>
        </form>
      </div>
    );
  };

  const renderStep5 = () => {
    return (
      <div className="overflow-y-auto flex flex-col gap-8 items-center justify-start max-w-4xl mx-auto bg-white p-6 md:p-10 rounded-lg shadow-[0_10px_40px_rgba(0,0,0,0.08)] h-[60vh] min-h-125 border border-[#111111]/5 custom-scrollbar">
        {selectedPackage === "essential" ? (
          <div className="w-full space-y-6">
            {roomsAccessoryTypes.length > 0 &&
              roomsAccessoryTypes.map((packageTypes) => {
                return (
                  <div key={packageTypes.packageType} className="w-full">
                    {packageTypes.packageType === "premium" &&
                      packageTypes.packageItems.map((items) => {
                        const selectedItems = items.room in selectedRooms;
                        return (
                          <div key={items.room} className="w-full">
                            {selectedItems === true && (
                              <div className="bg-[#FAF5E9]/40 border border-[#111111]/10 rounded-2xl p-6 md:p-8 mb-6 transition-all hover:bg-[#FAF5E9]/80 hover:shadow-md">
                                {/* Room Header */}
                                <div className="border-b border-[#111111]/10 pb-4 mb-6">
                                  <h3 className="text-2xl md:text-3xl font-montagu font-bold text-[#111111] mb-1">
                                    {items.room}{" "}
                                    <span>
                                      <span>{`(${selectedRooms[items.room]})`}</span>
                                    </span>
                                  </h3>
                                  <p className="text-sm text-zinc-500 italic">
                                    "{items.furniture.slogan}"
                                  </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                  {/* Furnitures Section */}
                                  <div>
                                    <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4 border-b border-primary/20 pb-2 inline-block">
                                      Furnitures
                                    </p>
                                    <ul className="space-y-2">
                                      {items.furniture?.items?.map(
                                        (item, id) => (
                                          <li
                                            key={id}
                                            className="flex items-start gap-2 text-sm text-zinc-700"
                                          >
                                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0"></span>
                                            <span className="leading-relaxed">
                                              {item}
                                            </span>
                                          </li>
                                        ),
                                      )}
                                    </ul>
                                  </div>

                                  {/* Accessories Section */}
                                  <div>
                                    <p className="text-sm font-bold uppercase tracking-widest text-[#111111] mb-4 border-b border-[#111111]/20 pb-2 inline-block">
                                      Accessories
                                    </p>
                                    <p className="text-sm text-zinc-700 leading-relaxed">
                                      {items.accessories?.join(", ")}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                  </div>
                );
              })}
          </div>
        ) : selectedPackage === "premium" ? (
          <div className="w-full space-y-6">
            {roomsAccessoryTypes.length > 0 &&
              roomsAccessoryTypes.map((packageTypes) => {
                return (
                  <div key={packageTypes.packageType} className="w-full">
                    {packageTypes.packageType === "premium" &&
                      packageTypes.packageItems.map((items) => {
                        const selectedItems = items.room in selectedRooms;
                        return (
                          <div key={items.room} className="w-full">
                            {selectedItems === true && (
                              <div className="bg-[#FAF5E9]/40 border border-[#111111]/10 rounded-2xl p-6 md:p-8 mb-6 transition-all hover:bg-[#FAF5E9]/80 hover:shadow-md">
                                {/* Room Header */}
                                <div className="border-b border-[#111111]/10 pb-4 mb-6">
                                  <h3 className="text-2xl md:text-3xl font-montagu font-bold text-[#111111] mb-1">
                                    {items.room}{" "}
                                    <span>
                                      <span>{`(${selectedRooms[items.room]})`}</span>
                                    </span>
                                  </h3>
                                  <p className="text-sm text-zinc-500 italic">
                                    "{items.furniture.slogan}"
                                  </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                  {/* Furnitures Section */}
                                  <div>
                                    <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4 border-b border-primary/20 pb-2 inline-block">
                                      Furnitures
                                    </p>
                                    <ul className="space-y-2">
                                      {items.furniture?.items?.map(
                                        (item, id) => (
                                          <li
                                            key={id}
                                            className="flex items-start gap-2 text-sm text-zinc-700"
                                          >
                                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0"></span>
                                            <span className="leading-relaxed">
                                              {item}
                                            </span>
                                          </li>
                                        ),
                                      )}
                                    </ul>
                                  </div>

                                  {/* Accessories Section */}
                                  <div>
                                    <p className="text-sm font-bold uppercase tracking-widest text-[#111111] mb-4 border-b border-[#111111]/20 pb-2 inline-block">
                                      Accessories
                                    </p>
                                    <p className="text-sm text-zinc-700 leading-relaxed">
                                      {items.accessories?.join(", ")}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                  </div>
                );
              })}
          </div>
        ) : selectedPackage === "luxury" ? (
          <div className="w-full space-y-6">
            {roomsAccessoryTypes.length > 0 &&
              roomsAccessoryTypes.map((packageTypes) => {
                return (
                  <div key={packageTypes.packageType} className="w-full">
                    {packageTypes.packageType === "premium" &&
                      packageTypes.packageItems.map((items) => {
                        const selectedItems = items.room in selectedRooms;
                        return (
                          <div key={items.room} className="w-full">
                            {selectedItems === true && (
                              <div className="bg-[#FAF5E9]/40 border border-[#111111]/10 rounded-2xl p-6 md:p-8 mb-6 transition-all hover:bg-[#FAF5E9]/80 hover:shadow-md">
                                {/* Room Header */}
                                <div className="border-b border-[#111111]/10 pb-4 mb-6">
                                  <h3 className="text-2xl md:text-3xl font-montagu font-bold text-[#111111] mb-1">
                                    {items.room}{" "}
                                    <span>
                                      <span>{`(${selectedRooms[items.room]})`}</span>
                                    </span>
                                  </h3>
                                  <p className="text-sm text-zinc-500 italic">
                                    "{items.furniture.slogan}"
                                  </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                  {/* Furnitures Section */}
                                  <div>
                                    <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4 border-b border-primary/20 pb-2 inline-block">
                                      Furnitures
                                    </p>
                                    <ul className="space-y-2">
                                      {items.furniture?.items?.map(
                                        (item, id) => (
                                          <li
                                            key={id}
                                            className="flex items-start gap-2 text-sm text-zinc-700"
                                          >
                                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0"></span>
                                            <span className="leading-relaxed">
                                              {item}
                                            </span>
                                          </li>
                                        ),
                                      )}
                                    </ul>
                                  </div>

                                  {/* Accessories Section */}
                                  <div>
                                    <p className="text-sm font-bold uppercase tracking-widest text-[#111111] mb-4 border-b border-[#111111]/20 pb-2 inline-block">
                                      Accessories
                                    </p>
                                    <p className="text-sm text-zinc-700 leading-relaxed">
                                      {items.accessories?.join(", ")}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                  </div>
                );
              })}
          </div>
        ) : (
          <div className="w-full max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-zinc-200 text-center my-8">
            <div className="max-w-2xl mx-auto space-y-4">
              {/* Badge */}
              <span className="px-4 py-1.5 bg-[#FAF5E9] text-primary text-xs font-bold uppercase tracking-widest rounded-full border border-primary/10 inline-block">
                Tailored For You
              </span>

              {/* Title */}
              <h2 className="text-2xl md:text-3xl font-montagu font-bold text-[#111111]">
                Custom Design Package
              </h2>

              {/* Description */}
              <p className="text-zinc-600 text-sm md:text-base leading-relaxed">
                This package is crafted completely from scratch based on your
                budget, specific requirements, and unique aesthetic choices.
                Tell us what you need, and our experts will tailor the ideal
                solution to transform your space.
              </p>

              {/* Divider */}
              <div className="h-px w-16 bg-[#c35e00]/30 mx-auto my-6" />

              {/* Slogan / Note */}
              <p className="text-base font-medium text-[#111111] italic font-serif">
                "Depends entirely on your requirements and budget range."
              </p>
            </div>
          </div>
        )}
        {/* Global CSS for Custom Scrollbar */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1; 
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #c35e00; 
          border-radius: 10px;
        }
      `,
          }}
        />
      </div>
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-6 bg-[#FAF5E9] font-poppins">
      <div className="relative w-full h-auto min-h-150 max-w-6xl bg-white rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-[#111111]/10 flex flex-col">
        {/* Error Modal */}
        {errorModal && (
          <div className="absolute top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md ">
            <div className="flex items-center gap-3 px-6 py-4 bg-red-50 border-l-4 border-red-500 rounded-lg shadow-lg">
              <span className="text-red-500 text-xl"></span>
              <p className="text-red-700 font-medium text-sm">{errorMsg}</p>
            </div>
          </div>
        )}

        {/* Dynamic Header Section */}
        <div className="text-center py-10 relative overflow-hidden flex flex-col justify-center min-h-[180px] bg-[#111111]">
          {currentStep === 1 && (
            <>
              <Image
                src={slideOne}
                alt="Background"
                fill
                className="object-cover opacity-50"
              />
              <div className="absolute inset-0 bg-black/70 z-0" />
            </>
          )}

          <div className="relative z-10 px-4 w-full border ">
            <p className="text-[#C87A31] font-semibold text-sm md:text-base mb-3 tracking-widest uppercase">
              Step: {currentStep}/5
            </p>

            {currentStep === 1 && (
              <h2 className="text-[#FFFFF0] text-2xl md:text-4xl font-bold tracking-wide">
                <span className="text-white">Select</span> Your Flat Size{" "}
                <span className="font-light">(sft)</span> &{" "}
                <span className="text-[#C87A31]">BHK</span> Type
              </h2>
            )}
            {currentStep === 2 && (
              <h2 className="text-[#FFFFF0] text-2xl md:text-4xl font-bold tracking-wide">
                <span className="text-[#C87A31]">Select</span> Which Room You
                Want to <span className="text-white">Design</span>
              </h2>
            )}
            {currentStep === 3 && (
              <h2 className="text-[#FFFFF0] text-2xl md:text-4xl font-bold tracking-wide">
                Pick The <span className="text-[#C87A31]">Package</span> That
                Suits You Best
              </h2>
            )}
            {currentStep === 4 && (
              <h2 className="text-[#FFFFF0] text-2xl md:text-3xl font-bold tracking-wide">
                <span className="text-white">We are excited</span> to be part of
                your Dream interior Journey!
              </h2>
            )}
            {currentStep === 5 && (
              <div className="w-full max-w-3xl mx-auto bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-zinc-200 mt-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                  {/* Package Info Section */}
                  <div>
                    <p className="text-sm font-medium text-zinc-500 mb-1">
                      Your Estimate Is Ready
                    </p>
                    <h2 className="text-2xl font-semibold text-zinc-800 mb-2">
                      {selectedPackage === "essential"
                        ? "Essential Package"
                        : selectedPackage === "premium"
                          ? "Premium Package"
                          : selectedPackage === "luxury"
                            ? "Luxury Package"
                            : "Custom Package"}
                    </h2>
                    <p className="text-3xl font-bold text-primary">
                      {selectedPackage === "essential"
                        ? "2,07,709 Tk"
                        : selectedPackage === "premium"
                          ? "3,45,669 Tk"
                          : selectedPackage === "luxury"
                            ? "5,54,889 Tk"
                            : "Depends on Your requirement"}
                    </p>
                    <p className="text-sm text-zinc-500 mt-2">
                      The First Step Towards Your Dream Home
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto mt-4 md:mt-0">
                    <button className="px-6 py-2.5 bg-primary hover:bg-[#a34e00] text-white text-sm font-medium rounded-lg transition-colors w-full sm:w-auto">
                      Call Now
                    </button>
                    <button
                      onClick={() => window.location.reload()}
                      className="px-6 py-2.5 bg-white border border-zinc-300 hover:bg-zinc-50 text-zinc-700 text-sm font-medium rounded-lg transition-colors w-full sm:w-auto"
                    >
                      Calculate Again
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Dynamic Body Section */}
        <div className="bg-linear-to-b from-[#FFFFF0] to-[#EFEADA] p-6 md:p-12 grow">
          {currentStep === 1 && renderStep1()}
          {currentStep === 2 && renderStep2()}
          {currentStep === 3 && renderStep3()}
          {currentStep === 4 && renderStep4()}
          {currentStep === 5 && renderStep5()}
        </div>

        {/* Footer Buttons Section */}
        {currentStep < 4 && (
          <div className="bg-[#FFFFF0] p-6 flex justify-center gap-4 border-t border-[#111111]/5">
            {currentStep > 1 && (
              <button
                onClick={handlePrev}
                className="px-8 py-3.5 rounded-full font-semibold border-2 border-[#111111] text-[#111111] hover:bg-gray-100 transition-all"
              >
                ← Prev
              </button>
            )}
            <button
              onClick={handleNext}
              className="flex items-center justify-center gap-2 bg-[#111111] hover:bg-[#C87A31] text-white font-semibold py-3.5 px-14 rounded-full transition-all duration-300 shadow-xl"
            >
              <span>Next</span>
              <FiChevronDown className="rotate-[-90deg]" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BudgetCalculator;
