const doe_ast = [
  {
    // Assets Table (Main Record)
    // assets_id: "DOE/AST/25/002",
    assets_id: "doe",
    get assets_src() {
      return `<img src="./assets_img/DOE_AST_25_01.jpg" alt="${this.name}">`;
    },
    name: "Digital Whiteboard",
    type: "Electronic",
    description: "",
    department: "",
    condition: "",
    quantity: "",
    location: "",
    cost: "",
    purchae_date: "",
    vendor: "",
    warranty_expire_date: "",

    // Maintenance Table (Record of Maintenance Activities)
    maintenance_id: "",
    // assets_id
    maintenance_date: "",
    maintenance_type: "",
    cost: "",
    mnt_description: "",

    // Disposal Table (If the Asset is Disposed of)
    disposal_id: "DIS/2030/002",
    // assets_id
    disposal_date: "",
    reason: "End of lifespan",
    note: "Replaces with a newer model.",

    // Asset Utilization Table (Tracking Usage)
    utilization_id: "UTL/2025/009",
    // assets_id
    status: "In Use",
    last_used_date: "",
    utilization_details: "HDMI port issue; temporarily unavailable.",
  },
];
