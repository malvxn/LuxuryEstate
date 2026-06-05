import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LuxurySearch() {
  return (
    <div className="mx-auto mt-10 w-full max-w-6xl rounded-3xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl md:p-6">
      <div className="grid gap-4 md:grid-cols-4">
        <Input
          placeholder="Location"
          className="h-12 border-white/10 bg-white/5 text-white placeholder:text-gray-400"
        />

        <select className="h-12 rounded-md border border-white/10 bg-white/5 px-3 text-white outline-none">
          <option className="text-black">Property Type</option>
          <option className="text-black">Apartment</option>
          <option className="text-black">Villa</option>
          <option className="text-black">Penthouse</option>
          <option className="text-black">Mansion</option>
        </select>

        <select className="h-12 rounded-md border border-white/10 bg-white/5 px-3 text-white outline-none">
          <option className="text-black">Price Range</option>
          <option className="text-black">$500k+</option>
          <option className="text-black">$1M+</option>
          <option className="text-black">$5M+</option>
          <option className="text-black">$10M+</option>
        </select>

        <Button
          size="lg"
          className="h-12 bg-yellow-500 text-black hover:bg-yellow-400"
        >
          <Search className="mr-2 h-4 w-4" />
          Search
        </Button>
      </div>
    </div>
  );
}