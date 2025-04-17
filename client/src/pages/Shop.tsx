import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Helmet } from "react-helmet";

const products = [
  {
    id: 1,
    name: "Vitamin D3+K2 Complex",
    price: 19.99,
    description: "Essential vitamin combination for optimal bone health and calcium absorption. 60 capsules.",
    image: "https://www.osteostrongtw.co.uk/wp-content/uploads/2023/02/VitaminD3-K2.jpg",
    features: [
      "Supports calcium absorption",
      "Promotes bone strength",
      "Supports immune function"
    ]
  },
  {
    id: 2,
    name: "Collagen Peptides",
    price: 29.95,
    description: "Premium grass-fed collagen for joint, bone, skin and hair health. 300g powder.",
    image: "https://www.osteostrongtw.co.uk/wp-content/uploads/2023/02/Collagem1.jpg",
    features: [
      "Supports ligament and tendon health",
      "Promotes skin elasticity",
      "Tasteless and dissolves easily"
    ]
  },
  {
    id: 3,
    name: "OsteoStrong Essential Minerals",
    price: 24.99,
    description: "Comprehensive mineral complex featuring calcium, magnesium, and trace minerals. 120 tablets.",
    image: "https://www.osteostrongtw.co.uk/wp-content/uploads/2023/02/MineralComplex1.png",
    features: [
      "Complete bone mineral profile",
      "Supports muscle function",
      "Highly bioavailable forms"
    ]
  },
  {
    id: 4,
    name: "Omega-3 Fish Oil",
    price: 22.50,
    description: "High-potency, ultra-purified fish oil supporting bone, joint and cardiovascular health. 90 softgels.",
    image: "https://www.osteostrongtw.co.uk/wp-content/uploads/2023/02/Omega3.jpg",
    features: [
      "Anti-inflammatory support",
      "Heart and brain health",
      "Molecularly distilled for purity"
    ]
  },
  {
    id: 5,
    name: "Joint Support Formula",
    price: 27.95,
    description: "Complete formula with glucosamine, chondroitin, MSM and herbal extracts. 120 capsules.",
    image: "https://www.osteostrongtw.co.uk/wp-content/uploads/2023/02/JointSupport1.jpg",
    features: [
      "Supports cartilage health",
      "Promotes joint comfort",
      "Maintains joint flexibility"
    ]
  },
  {
    id: 6,
    name: "Plant-Based Protein",
    price: 34.99,
    description: "Complete vegan protein blend to support muscle recovery and bone health. 500g.",
    image: "https://www.osteostrongtw.co.uk/wp-content/uploads/2023/02/PlantProtein1.jpg",
    features: [
      "20g protein per serving",
      "Promotes muscle recovery",
      "Smooth, creamy texture"
    ]
  },
  {
    id: 7,
    name: "Magnesium Glycinate",
    price: 18.95,
    description: "Highly absorbable magnesium for muscle relaxation and bone health. 120 capsules.",
    image: "https://www.osteostrongtw.co.uk/wp-content/uploads/2023/02/Magnesium1.jpg",
    features: [
      "Supports bone density",
      "Promotes muscle relaxation",
      "Gentle on the digestive system"
    ]
  },
  {
    id: 8,
    name: "OsteoStrong Water Bottle",
    price: 12.99,
    description: "BPA-free 750ml water bottle with OsteoStrong branding. Perfect for staying hydrated during workouts.",
    image: "https://www.osteostrongtw.co.uk/wp-content/uploads/2023/02/WaterBottle1.jpg",
    features: [
      "Leakproof design",
      "Easy-grip texture",
      "Dishwasher safe"
    ]
  },
  {
    id: 9,
    name: "Grip Strength Trainer",
    price: 14.95,
    description: "Adjustable resistance hand grip strengthener to improve forearm and grip strength.",
    image: "https://www.osteostrongtw.co.uk/wp-content/uploads/2023/02/GripStrength1.jpg",
    features: [
      "Adjustable resistance",
      "Ergonomic comfort grip",
      "Portable design"
    ]
  }
];

const Shop = () => {
  const [quantities, setQuantities] = useState<{ [key: number]: number }>(
    products.reduce((acc, product) => ({ ...acc, [product.id]: 0 }), {})
  );
  const { toast } = useToast();

  const handleQuantityChange = (productId: number, value: string) => {
    const quantity = parseInt(value) || 0;
    setQuantities({
      ...quantities,
      [productId]: quantity < 0 ? 0 : quantity
    });
  };

  const handleAddToCart = (product: typeof products[0]) => {
    const quantity = quantities[product.id];
    
    if (quantity <= 0) {
      toast({
        title: "Please select a quantity",
        description: "Quantity must be at least 1 to add to cart",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Added to cart",
      description: `${quantity} × ${product.name} added to your cart`
    });
    
    // Reset quantity
    setQuantities({
      ...quantities,
      [product.id]: 0
    });
  };

  return (
    <>
      <Helmet>
        <title>Shop | OsteoStrong</title>
        <meta name="description" content="Shop OsteoStrong's selection of bone health supplements, fitness accessories, and branded merchandise to complement your OsteoStrong sessions." />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"></script>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>

      <div className="py-10 bg-primary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">OsteoStrong Shop</h1>
          <p className="text-xl text-white">Premium supplements and accessories to support your bone health journey</p>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="bg-neutral-100 rounded-xl overflow-hidden transition-all hover:shadow-lg">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-64 object-contain p-4 bg-white"
                />
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{product.name}</h3>
                    <span className="text-lg font-bold text-primary">£{product.price.toFixed(2)}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <ul className="mb-6 space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <i className="fas fa-check text-primary mr-2"></i>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex space-x-3">
                    <div className="w-1/3">
                      <Input
                        type="number"
                        min="0"
                        value={quantities[product.id]}
                        onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                        className="w-full text-center"
                      />
                    </div>
                    <Button 
                      className="bg-primary hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded-full transition shadow-md flex-1"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;