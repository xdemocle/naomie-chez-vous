import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, MessageCircle, Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Le nom doit contenir au moins 2 caractères" })
    .max(50, { message: "Le nom doit contenir moins de 50 caractères" })
    .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, { message: "Le nom contient des caractères invalides" }),
  message: z
    .string()
    .trim()
    .min(10, { message: "Le message doit contenir au moins 10 caractères" })
    .max(500, { message: "Le message doit contenir moins de 500 caractères" }),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      message: "",
    },
  });

  const handleWhatsAppSubmit = (data: ContactFormData) => {
    const phoneNumber = "242067459576";
    const formattedMessage = `Bonjour! Je suis ${data.name}.\n\n${data.message}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(formattedMessage)}`;
    window.open(whatsappUrl, "_blank");
    form.reset();
  };

  const handleQuickWhatsApp = () => {
    const message = "Bonjour! J'aimerais passer une commande ou avoir des informations sur vos produits.";
    const phoneNumber = "242067459576";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Notre Adresse",
      content: ["Pointe-Noire", "République du Congo"],
      action: null
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Téléphone",
      content: ["+242 06 745 9576"],
      action: () => window.open("tel:+242067459576")
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "WhatsApp Business",
      content: ["Commandes et informations", "Réponse rapide garantie"],
      action: handleQuickWhatsApp
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Horaires",
      content: ["Lun - Sam: 8h - 18h", "Dim: 10h - 16h"],
      action: null
    }
  ];

  return (
    <section id="contact" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contactez
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Nous</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Notre équipe est à votre disposition pour vous conseiller et répondre à toutes vos questions. 
            Commandez facilement via WhatsApp ou contactez-nous directement à Pointe-Noire.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <Card 
              key={info.title}
              className={`text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1 animate-fade-in border-border ${
                info.action ? 'cursor-pointer hover:bg-muted/50' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={info.action || undefined}
            >
              <CardContent className="p-6">
                <div className="inline-flex p-3 bg-gradient-primary rounded-xl text-white mb-4">
                  {info.icon}
                </div>
                <h3 className="font-semibold text-lg text-card-foreground mb-3">
                  {info.title}
                </h3>
                <div className="space-y-1">
                  {info.content.map((line, lineIndex) => (
                    <p key={lineIndex} className="text-sm text-muted-foreground">
                      {line}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-2xl p-8 shadow-card border border-border max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold text-card-foreground mb-4">
            Commandez facilement sur WhatsApp
          </h3>
          <p className="text-muted-foreground mb-6">
            Remplissez le formulaire ci-dessous pour nous envoyer votre demande via WhatsApp.
          </p>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleWhatsAppSubmit)} className="space-y-4 text-left">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Votre nom</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Entrez votre nom" 
                        {...field} 
                        maxLength={50}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Votre message</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Décrivez le produit qui vous intéresse ou posez vos questions..." 
                        className="min-h-[100px] resize-none"
                        {...field}
                        maxLength={500}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button type="submit" size="lg" className="w-full text-lg">
                <MessageCircle className="h-5 w-5" />
                Envoyer via WhatsApp
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Contact;