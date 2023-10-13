export const addProductConfig = {
  productInfo: [
    { label: "brand", value: "brand" },
    { label: "model", value: "model" },
    { label: "description", value: "description" },
    { label: "old price", value: "old_price" },
    { label: "current price", value: "current_price" },
  ],
  productSpecifications: [
    { label: "phone type", value: "phone_type" },
    { label: "sim slots", value: "sim_slots" },
    { label: "sim type", value: "sim_type" },
    { label: "os", value: "os" },
    { label: "os version", value: "os_version" },
    { label: "conectivity", value: "conectivity" },
    { label: "bluetooth version", value: "bluetooth_version" },
    { label: "cpu", value: "cpu" },
    { label: "cpu cores", value: "cpu_cores" },
    { label: "cpu freq", value: "cpu_freq" },
    { label: "physical dimensions w", value: "physical_dimensions_w" },
    { label: "physical dimensions l", value: "physical_dimensions_l" },
    { label: "physical dimensions h", value: "physical_dimensions_h" },
    { label: "weight", value: "weight" },
    { label: "network gen", value: "network_gen" },
    { label: "display size", value: "display_size" },
    { label: "display type", value: "display_type" },
    { label: "display res w", value: "display_res_w" },
    { label: "display res l", value: "display_res_l" },
    { label: "display refresh", value: "display_refresh" },
    { label: "charging port", value: "charging_port" },
    { label: "battery size", value: "battery_size" },
    { label: "charging power", value: "charging_power" },
    { label: "camera number", value: "camera_number" },
    { label: "camera main", value: "camera_main" },
    { label: "camera secondary", value: "camera_secondary" },
    { label: "color", value: "color" },
    { label: "storage", value: "storage" },
    { label: "ram", value: "ram" },
  ],
};

export interface Product {
  productInfo: ProductInfo;
  productSpecifications: ProductSpecifications;
  productImages: [ProductImage];
}

interface ProductInfo {
  brand: string;
  model: string;
  description: string;
  old_price: number;
  current_price: number;
}

interface ProductSpecifications {
  phone_type: string;
  sim_slots: string;
  sim_type: string;
  os: string;
  os_version: string;
  conectivity: string;
  bluetooth_vversion: string;
  cpu: string;
  cpu_cores: string;
  cpu_freq: string;
  physical_dimensions_w: number;
  physical_dimensions_l: number;
  physical_dimensions_h: number;
  weight: string;
  network_gen: string;
  display_size: string;
  display_type: string;
  display_res_w: string;
  display_res_l: string;
  display_refresh: string;
  charging_port: string;
  battery_size: string;
  charging_power: string;
  camera_number: string;
  camera_main: string;
  camera_secondary: string;
  color: string;
  storage: string;
  ram: string;
}

interface ProductImage {
  url: string;
  type: string;
  size: string;
}
