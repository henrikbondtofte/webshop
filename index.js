
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black p-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Velkommen til Bondtoftes Webshop</h1>

      <section className="grid md:grid-cols-2 gap-6 mb-12">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">SEO Basic Pakke</h2>
            <p className="mb-4">3 timers rådgivning, 2 links, 30 min. sparring</p>
            <p className="mb-4 font-semibold">Pris: 1.680 kr</p>
            <Button asChild>
              <Link href="/checkout/seo-basic">Bestil nu</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">SEO Premium Pakke</h2>
            <p className="mb-4">7 timer/måned, 6 links, løbende sparring</p>
            <p className="mb-4 font-semibold">Pris: 4.800 kr / md.</p>
            <Button asChild>
              <Link href="/checkout/seo-premium">Tilmeld abonnement</Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      <h2 className="text-3xl font-bold mb-4">Bøger</h2>

      <section className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2">Linkbuildingbogen (PDF)</h3>
            <p className="mb-4">Digital version – download efter køb</p>
            <p className="mb-4 font-semibold">Pris: 299 kr</p>
            <Button asChild>
              <Link href="/checkout/linkbuildingbogen-pdf">Køb nu</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2">Linkbuildingbogen (Trykt)</h3>
            <p className="mb-4">Fysisk bog – leveres med DAO/GLS</p>
            <p className="mb-4 font-semibold">Pris: 399 kr</p>
            <Button asChild>
              <Link href="/checkout/linkbuildingbogen-tryk">Bestil fysisk udgave</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
    