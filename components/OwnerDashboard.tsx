import { motion } from "motion/react";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from "recharts";
import { 
  LayoutDashboard, 
  Calendar, 
  FileText, 
  TrendingUp, 
  Shield, 
  Smartphone,
  CheckCircle2
} from "lucide-react";

import Logo from "@/components/Logo";

const data = [
  { name: "Jan", revenue: 2400 },
  { name: "Fév", revenue: 3200 },
  { name: "Mar", revenue: 2800 },
  { name: "Avr", revenue: 4500 },
  { name: "Mai", revenue: 5200 },
  { name: "Juin", revenue: 6800 },
];

const features = [
  {
    icon: TrendingUp,
    title: "Suivi des Revenus",
    description: "Visualisez vos gains nets, les taux d'occupation et les performances par plateforme en temps réel."
  },
  {
    icon: Calendar,
    title: "Calendrier Synchronisé",
    description: "Consultez les réservations passées et futures. Bloquez vos propres dates en un clic."
  },
  {
    icon: FileText,
    title: "Rapports & Factures",
    description: "Accédez à vos comptes rendus mensuels, factures de ménage et documents fiscaux centralisés."
  },
  {
    icon: Shield,
    title: "Maintenance & État des lieux",
    description: "Suivez les interventions techniques et consultez les photos des états des lieux après chaque départ."
  }
];

export default function OwnerDashboard() {
  return (
    <section id="espace-proprietaire" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Content Side */}
          <div className="lg:w-1/2 order-2 lg:order-1">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary uppercase tracking-[0.3em] text-[10px] font-bold mb-6 block"
            >
              Transparence Totale
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-serif mb-8 leading-tight text-primary"
            >
              Votre patrimoine <br />au bout des doigts
            </motion.h2>
            <p className="text-primary/60 text-lg mb-12 leading-relaxed">
              Nous mettons à votre disposition un espace propriétaire exclusif et sécurisé. Suivez l'activité de votre bien en toute simplicité, où que vous soyez.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary flex items-center justify-center rounded-full p-1.5">
                      <Logo className="w-full" light={true} />
                    </div>
                    <h3 className="font-bold text-sm uppercase tracking-wider text-primary">{feature.title}</h3>
                  </div>
                  <p className="text-primary text-sm leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-12 flex items-center gap-4 p-6 bg-secondary/50 border border-primary/5"
            >
              <Smartphone className="w-8 h-8 text-primary/40" />
              <p className="text-sm text-primary/70 italic">
                Disponible sur Web, iOS et Android pour une gestion en mobilité.
              </p>
            </motion.div>
          </div>

          {/* Visual Mockup Side */}
          <div className="lg:w-1/2 order-1 lg:order-2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-10 bg-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-primary/5 rounded-xl overflow-hidden"
            >
              {/* Fake App Header */}
              <div className="bg-primary p-6 flex items-center justify-between text-white">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                    <LayoutDashboard className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-serif text-lg tracking-tight">SHOST Portal</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/10" />
                </div>
              </div>

              {/* Fake App Content */}
              <div className="p-8 space-y-8 bg-surface">
                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: "Revenus", val: "4,250€", color: "text-accent" },
                    { label: "Occup.", val: "88%", color: "text-primary" },
                    { label: "Note", val: "4.9/5", color: "text-primary" }
                  ].map((stat, i) => (
                    <div key={i} className="bg-white p-4 border border-primary/5 shadow-sm">
                      <p className="text-[9px] uppercase tracking-widest text-primary/40 mb-1">{stat.label}</p>
                      <p className={`text-xl font-serif ${stat.color}`}>{stat.val}</p>
                    </div>
                  ))}
                </div>

                {/* Chart Area */}
                <div className="bg-white p-6 border border-primary/5 shadow-sm h-64">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-[10px] uppercase tracking-widest font-bold text-primary">Évolution des revenus</h4>
                    <span className="text-[9px] text-primary/40">6 derniers mois</span>
                  </div>
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                      <defs>
                        <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#c5a059" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#c5a059" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                      <XAxis 
                        dataKey="name" 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{fontSize: 10, fill: '#999'}} 
                        dy={10}
                      />
                      <YAxis hide />
                      <Tooltip 
                        contentStyle={{ borderRadius: '0px', border: '1px solid #eee', fontSize: '12px' }}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="revenue" 
                        stroke="#c5a059" 
                        strokeWidth={3}
                        fillOpacity={1} 
                        fill="url(#colorRev)" 
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                {/* Recent Activity */}
                <div className="space-y-4">
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-primary">Activités récentes</h4>
                  {[
                    { msg: "Nouvelle réservation - 4 nuits", time: "Il y a 2h", icon: CheckCircle2 },
                    { msg: "Ménage terminé - Appartement Paris 8", time: "Il y a 5h", icon: CheckCircle2 }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-white border border-primary/5">
                      <div className="flex items-center gap-3">
                        <item.icon className="w-4 h-4 text-accent" />
                        <span className="text-xs text-primary/70">{item.msg}</span>
                      </div>
                      <span className="text-[10px] text-primary/30">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Decorative background element */}
            <div className="absolute -top-10 -right-10 w-full h-full bg-secondary -z-10 translate-x-10 translate-y-10" />
          </div>

        </div>
      </div>
    </section>
  );
}
