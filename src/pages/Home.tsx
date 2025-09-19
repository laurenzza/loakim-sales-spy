import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Brain, TrendingUp } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <BarChart3 className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">SalesPredictAI</span>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Link to="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link to="/signup">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Prediksi Penjualan dengan AI
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Tingkatkan strategi bisnis Anda dengan prediksi penjualan yang akurat menggunakan 
            kecerdasan buatan terdepan. Analisis data, prediksi tren, dan optimalkan keuntungan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" className="text-lg px-8">
                Mulai Gratis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/login">
              <Button size="lg" variant="outline" className="text-lg px-8">
                Masuk ke Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Fitur Unggulan</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-card border border-border/50">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Machine Learning</h3>
              <p className="text-muted-foreground">
                Algoritma pembelajaran mesin canggih yang terus belajar dari data penjualan Anda
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-card border border-border/50">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Prediksi Akurat</h3>
              <p className="text-muted-foreground">
                Dapatkan prediksi penjualan dengan tingkat akurasi hingga 95% untuk perencanaan yang lebih baik
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-card border border-border/50">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Analytics Real-time</h3>
              <p className="text-muted-foreground">
                Dashboard analitik real-time dengan visualisasi data yang mudah dipahami
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Siap Meningkatkan Penjualan?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Bergabunglah dengan ribuan bisnis yang telah meningkatkan penjualan mereka dengan SalesPredictAI
          </p>
          <Link to="/signup">
            <Button size="lg" className="text-lg px-8">
              Mulai Sekarang - Gratis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 SalesPredictAI. Semua hak dilindungi.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;