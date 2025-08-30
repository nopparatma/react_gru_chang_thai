import { useTranslations } from "next-intl";
import { Crown, Heart, Award, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function AboutUsPage() {
  const t = useTranslations();

  const values = [
    {
      icon: Crown,
      key: "authenticity",
      gradient: "from-yellow-500 to-amber-600",
    },
    {
      icon: Heart,
      key: "heritage",
      gradient: "from-red-500 to-rose-600",
    },
    {
      icon: Award,
      key: "excellence",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      icon: Users,
      key: "respect",
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
              {t("aboutUs.title")}
            </h1>
            <p
              className="text-xl sm:text-2xl text-white font-light max-w-4xl mx-auto leading-relaxed"
              style={{
                textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
                fontFamily: "Charmonman, cursive",
              }}
            >
              {t("aboutUs.subtitle")}
            </p>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
          <p
            className="text-lg sm:text-xl text-white leading-relaxed max-w-5xl mx-auto mb-16"
            style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}
          >
            {t("aboutUs.intro")}
          </p>
        </div>

        {/* Story Sections Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-20">
          {/* Our Story */}
          <Card className="bg-black/40 border-amber-600/30 backdrop-blur-sm hover:bg-black/50 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <span className="text-gold-gradient text-2xl">
                  {t("aboutUs.ourStory.title")}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/90 leading-relaxed">
                {t("aboutUs.ourStory.content")}
              </p>
            </CardContent>
          </Card>

          {/* Master Craftsmanship */}
          <Card className="bg-black/40 border-amber-600/30 backdrop-blur-sm hover:bg-black/50 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-600 to-yellow-700 rounded-full flex items-center justify-center">
                  <Crown className="w-6 h-6 text-white" />
                </div>
                <span className="text-gold-gradient text-2xl">
                  {t("aboutUs.craftsmanship.title")}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/90 leading-relaxed">
                {t("aboutUs.craftsmanship.content")}
              </p>
            </CardContent>
          </Card>

          {/* Cultural Heritage */}
          <Card className="bg-black/40 border-amber-600/30 backdrop-blur-sm hover:bg-black/50 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <span className="text-gold-gradient text-2xl">
                  {t("aboutUs.heritage.title")}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/90 leading-relaxed">
                {t("aboutUs.heritage.content")}
              </p>
            </CardContent>
          </Card>

          {/* Our Mission */}
          <Card className="bg-black/40 border-amber-600/30 backdrop-blur-sm hover:bg-black/50 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <span className="text-gold-gradient text-2xl">
                  {t("aboutUs.mission.title")}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/90 leading-relaxed">
                {t("aboutUs.mission.content")}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values Section */}
        <div className="bg-black/20 backdrop-blur-sm rounded-3xl p-12 border border-amber-600/20">
          <div className="text-center mb-12">
            <h2
              className="text-3xl sm:text-4xl font-bold text-gold-gradient mb-4"
              style={{ fontFamily: "Charmonman, cursive" }}
            >
              {t("aboutUs.values.title")}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-yellow-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => {
              const IconComponent = value.icon;
              return (
                <Card
                  key={value.key}
                  className="text-center bg-black/60 border-amber-600/30 backdrop-blur-sm hover:bg-black/70 transition-all duration-300"
                >
                  <CardContent className="pt-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${value.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gold-gradient mb-3">
                      {t(`aboutUs.values.${value.key}.title`)}
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed">
                      {t(`aboutUs.values.${value.key}.description`)}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <Card className="bg-black/60 border-amber-600/30 backdrop-blur-sm text-white p-12">
            <CardContent className="space-y-6">
              <h3
                className="text-2xl sm:text-3xl font-bold text-gold-gradient"
                style={{ fontFamily: "Charmonman, cursive" }}
              >
                Discover Our Collection
              </h3>
              <p className="text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                Explore our carefully curated selection of authentic Thai
                antique jewelry and contemporary pieces that honor traditional
                craftsmanship.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="button-gold-gradient px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg">
                  View Collection
                </button>
                <button className="border-2 border-amber-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-500 hover:text-black transition-all duration-300">
                  Contact Us
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
