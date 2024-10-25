import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Globe2, MapPin, Mail, Phone } from 'lucide-react'

const translations = {
  de: {
    nav: {
      home: "Startseite",
      services: "Dienstleistungen",
      locations: "Standorte",
      contact: "Kontakt",
    },
    hero: {
      title: "LetAIWork4U",
      subtitle: "Ihr Partner für KI-Lösungen und App-Entwicklung",
    },
    services: {
      title: "Unsere Dienstleistungen",
      ai: "Künstliche Intelligenz",
      llm: "Large Language Models",
      app: "App-Entwicklung",
      it: "IT-Dienstleistungen",
    },
    locations: {
      title: "Unsere Standorte",
      germany: "Deutschland (Hauptsitz)",
      thailand: "Thailand (Nebensitz)",
    },
    contact: {
      title: "Kontaktieren Sie uns",
      name: "Name",
      email: "E-Mail",
      message: "Nachricht",
      send: "Senden",
    },
    footer: {
      rights: "Alle Rechte vorbehalten",
    },
  },
  th: {
    nav: {
      home: "หน้าแรก",
      services: "บริการ",
      locations: "ที่ตั้ง",
      contact: "ติดต่อ",
    },
    hero: {
      title: "LetAIWork4U",
      subtitle: "พาร์ทเนอร์ของคุณสำหรับโซลูชัน AI และการพัฒนาแอป",
    },
    services: {
      title: "บริการของเรา",
      ai: "ปัญญาประดิษฐ์",
      llm: "โมเดลภาษาขนาดใหญ่",
      app: "การพัฒนาแอป",
      it: "บริการไอที",
    },
    locations: {
      title: "ที่ตั้งของเรา",
      germany: "เยอรมนี (สำนักงานใหญ่)",
      thailand: "ประเทศไทย (สำนักงานสาขา)",
    },
    contact: {
      title: "ติดต่อเรา",
      name: "ชื่อ",
      email: "อีเมล",
      message: "ข้อความ",
      send: "ส่ง",
    },
    footer: {
      rights: "สงวนลิขสิทธิ์",
    },
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      locations: "Locations",
      contact: "Contact",
    },
    hero: {
      title: "LetAIWork4U",
      subtitle: "Your Partner for AI Solutions and App Development",
    },
    services: {
      title: "Our Services",
      ai: "Artificial Intelligence",
      llm: "Large Language Models",
      app: "App Development",
      it: "IT Services",
    },
    locations: {
      title: "Our Locations",
      germany: "Germany (Headquarters)",
      thailand: "Thailand (Branch Office)",
    },
    contact: {
      title: "Contact Us",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send",
    },
    footer: {
      rights: "All rights reserved",
    },
  },
}

export default function LandingPage() {
  const [lang, setLang] = useState('de')
  const t = translations[lang]

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <nav className="flex items-center space-x-4 lg:space-x-6 mx-6">
            <a href="#home" className="text-sm font-medium transition-colors hover:text-primary">
              {t.nav.home}
            </a>
            <a href="#services" className="text-sm font-medium transition-colors hover:text-primary">
              {t.nav.services}
            </a>
            <a href="#locations" className="text-sm font-medium transition-colors hover:text-primary">
              {t.nav.locations}
            </a>
            <a href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
              {t.nav.contact}
            </a>
          </nav>
          <div className="flex items-center ml-auto">
            <Select onValueChange={setLang} defaultValue={lang}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="de">Deutsch</SelectItem>
                <SelectItem value="th">ไทย</SelectItem>
                <SelectItem value="en">English</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section id="home" className="py-24 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">{t.hero.title}</h1>
            <p className="text-xl">{t.hero.subtitle}</p>
          </div>
        </section>
        <section id="services" className="py-16 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">{t.services.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[t.services.ai, t.services.llm, t.services.app, t.services.it].map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4">{service}</h3>
                  <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="locations" className="py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">{t.locations.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">{t.locations.germany}</h3>
                <p className="flex items-center"><MapPin className="mr-2" /> Würzburg, Deutschland</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">{t.locations.thailand}</h3>
                <p className="flex items-center"><MapPin className="mr-2" /> Bangkok, Thailand</p>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="py-16 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">{t.contact.title}</h2>
            <form className="max-w-md mx-auto">
              <div className="mb-4">
                <Input type="text" placeholder={t.contact.name} />
              </div>
              <div className="mb-4">
                <Input type="email" placeholder={t.contact.email} />
              </div>
              <div className="mb-4">
                <Textarea placeholder={t.contact.message} />
              </div>
              <Button type="submit" className="w-full">{t.contact.send}</Button>
            </form>
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">LetAIWork4U</h3>
              <p>© 2024 LetAIWork4U. {t.footer.rights}.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">{t.nav.locations}</h3>
              <p className="flex items-center mb-2"><MapPin className="mr-2" /> Würzburg, Deutschland</p>
              <p className="flex items-center"><MapPin className="mr-2" /> Bangkok, Thailand</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">{t.nav.contact}</h3>
              <p className="flex items-center mb-2"><Mail className="mr-2" /> info@letaiwork4u.com</p>
              <p className="flex items-center"><Phone className="mr-2" /> +49 123 456789</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
