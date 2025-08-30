import { useTranslations } from "next-intl";
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  MessageCircle,
  UserCheck,
  Award,
  Wrench,
  Sparkles,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

function ContactUsPage() {
  const t = useTranslations();

  const services = [
    {
      icon: UserCheck,
      key: "consultation",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      icon: Award,
      key: "authentication",
      gradient: "from-amber-500 to-yellow-600",
    },
    {
      icon: Sparkles,
      key: "customization",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      icon: Wrench,
      key: "restoration",
      gradient: "from-green-500 to-emerald-600",
    },
  ];

  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(135deg, #8B4513 0%, #A0522D 25%, #CD853F 50%, #DEB887 75%, #F5DEB3 100%)",
      }}
    >
      {/* Hero Section */}
      <div className="relative bg-black/60 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpattern id='pattern' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/pattern%3E%3Crect width='60' height='60' fill='url(%23pattern)'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gold-gradient"
              style={{ fontFamily: "Charmonman, cursive" }}
            >
              {t("contactUs.title")}
            </h1>
            <p
              className="text-xl sm:text-2xl text-white font-light max-w-4xl mx-auto leading-relaxed"
              style={{
                textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
                fontFamily: "Charmonman, cursive",
              }}
            >
              {t("contactUs.subtitle")}
            </p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <p
            className="text-lg sm:text-xl text-white leading-relaxed max-w-4xl mx-auto mb-16"
            style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}
          >
            {t("contactUs.intro")}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <Card className="bg-black/40 border-amber-600/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <span className="text-gold-gradient text-2xl">
                  {t("contactUs.form.title")}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white font-semibold">
                      {t("contactUs.form.name")} *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      className="bg-black/30 border-amber-600/30 text-white placeholder-white/60 focus:border-amber-500"
                      placeholder={t("contactUs.form.namePlaceholder")}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white font-semibold">
                      {t("contactUs.form.email")} *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      className="bg-black/30 border-amber-600/30 text-white placeholder-white/60 focus:border-amber-500"
                      placeholder={t("contactUs.form.emailPlaceholder")}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white font-semibold">
                      {t("contactUs.form.phone")}
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      className="bg-black/30 border-amber-600/30 text-white placeholder-white/60 focus:border-amber-500"
                      placeholder={t("contactUs.form.phonePlaceholder")}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="subject"
                      className="text-white font-semibold"
                    >
                      {t("contactUs.form.subject")} *
                    </Label>
                    <Input
                      id="subject"
                      type="text"
                      required
                      className="bg-black/30 border-amber-600/30 text-white placeholder-white/60 focus:border-amber-500"
                      placeholder={t("contactUs.form.subjectPlaceholder")}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white font-semibold">
                    {t("contactUs.form.message")} *
                  </Label>
                  <Textarea
                    id="message"
                    rows={5}
                    required
                    className="bg-black/30 border-amber-600/30 text-white placeholder-white/60 focus:border-amber-500 resize-none"
                    placeholder={t("contactUs.form.messagePlaceholder")}
                  />
                </div>

                <div className="text-sm text-white/70 mb-4">
                  {t("contactUs.form.required")}
                </div>

                <Button
                  type="submit"
                  className="w-full button-gold-gradient py-4 rounded-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  {t("contactUs.form.submit")}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Info Card */}
            <Card className="bg-black/40 border-amber-600/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-gold-gradient">
                  {t("contactUs.info.title")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gold-gradient mb-1">
                      {t("contactUs.info.address.title")}
                    </h3>
                    <div className="text-white/80 space-y-1">
                      <p>{t("contactUs.info.address.line1")}</p>
                      <p>{t("contactUs.info.address.line2")}</p>
                      <p>{t("contactUs.info.address.line3")}</p>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gold-gradient mb-1">
                      {t("contactUs.info.hours.title")}
                    </h3>
                    <div className="text-white/80 space-y-1">
                      <p>{t("contactUs.info.hours.monday")}</p>
                      <p>{t("contactUs.info.hours.weekend")}</p>
                      <p className="text-sm italic">
                        {t("contactUs.info.hours.holiday")}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contact Details */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gold-gradient mb-1">
                      {t("contactUs.info.contact.title")}
                    </h3>
                    <div className="text-white/80 space-y-1">
                      <p className="flex items-center">
                        <Phone className="w-4 h-4 mr-2" />
                        {t("contactUs.info.contact.phone")}
                      </p>
                      <p className="flex items-center">
                        <Mail className="w-4 h-4 mr-2" />
                        {t("contactUs.info.contact.email")}
                      </p>
                      <p className="flex items-center">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        {t("contactUs.info.contact.whatsapp")}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Services Card */}
            <Card className="bg-black/20 border-amber-600/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle
                  className="text-2xl text-gold-gradient"
                  style={{ fontFamily: "Charmonman, cursive" }}
                >
                  {t("contactUs.services.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  {services.map((service) => {
                    const IconComponent = service.icon;
                    return (
                      <Card
                        key={service.key}
                        className="bg-black/60 border-amber-600/30 hover:bg-black/70 transition-all duration-300"
                      >
                        <CardContent className="p-6">
                          <div
                            className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-full flex items-center justify-center mb-4`}
                          >
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <h3 className="text-lg font-semibold text-gold-gradient mb-2">
                            {t(`contactUs.services.${service.key}.title`)}
                          </h3>
                          <p className="text-white/80 text-sm leading-relaxed">
                            {t(`contactUs.services.${service.key}.description`)}
                          </p>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Card className="bg-black/40 border-amber-600/30 backdrop-blur-sm overflow-hidden">
            <CardHeader className="bg-black/60 border-b border-amber-600/30">
              <CardTitle
                className="text-2xl font-bold text-gold-gradient"
                style={{ fontFamily: "Charmonman, cursive" }}
              >
                Find Our Store
              </CardTitle>
              <p
                className="text-white/90"
                style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}
              >
                Visit us in the heart of Bangkok&apos;s heritage district
              </p>
            </CardHeader>
            <CardContent className="p-0">
              <div className="h-96 bg-black/20 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg font-semibold text-gold-gradient">
                    Interactive Map
                  </p>
                  <p className="text-sm text-white/70">
                    Map integration would be implemented here
                  </p>
                  <p className="text-xs mt-2 text-amber-400">
                    123 Heritage Street, Old Quarter, Bangkok
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-black/60 border-amber-600/30 backdrop-blur-sm text-white">
            <CardContent className="p-12 space-y-6">
              <h3
                className="text-2xl sm:text-3xl font-bold text-gold-gradient"
                style={{ fontFamily: "Charmonman, cursive" }}
              >
                Ready to Explore Thai Heritage?
              </h3>
              <p className="text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                Whether you are looking for authentic antique pieces or want to
                learn about Thai craftsmanship, we are here to guide your
                journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="button-gold-gradient px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg">
                  Schedule Visit
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-amber-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-500 hover:text-black transition-all duration-300 bg-transparent"
                >
                  View Collection
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default ContactUsPage;
