// Internal Owner Phone Number (Kept Private from UI)
const OWNER_WHATSAPP = '919819717406';

// Categories List
const categories = [
    'All',
    '2-in-1 Sets',
    '3-in-1 Sets',
    '4-in-1 Sets',
    'Cardholder Sets',
    'Diary Sets',
    'Flask Sets',
    'Drinkware',
    'Writing Instruments',
    'Executive Sets',
    'Leather Accessories',
    'Travel Accessories',
    'Eco Sets',
    'Desktop Accessories',
    'Apparel',
    'Powerbank Sets',
    'Leather Sets'
];

// Cleaned Products Array (All verified products)
const products = [
    { id: 'HPK01', category: '2-in-1 Sets', name: 'Black & Gold Keyring Pen Set', image: 'image/0.jpg' },
    { id: 'HPK02', category: '2-in-1 Sets', name: 'Classic Executive Pen & Keyring', image: 'image/1.jpg' },
    { id: 'HPK03', category: '2-in-1 Sets', name: 'Gold-Trimmed Gift Set', image: 'image/2.jpg' },
    { id: 'HPK04', category: '2-in-1 Sets', name: 'Silver & Gold Pen Keyring Set', image: 'image/3.jpg' },
    { id: 'HPK04B', category: '2-in-1 Sets', name: 'Executive Matte Black Pen & Leather Keyring Gift Box Set', image: 'image/4.jpg' },
    { id: 'HPK05', category: '2-in-1 Sets', name: 'Matte Black Roller Pen & Belt Keychain', image: 'image/5.jpg' },
    { id: 'HPK06', category: '2-in-1 Sets', name: 'All-Black Executive Pen & Keyring Set', image: 'image/6.jpg' },
    { id: 'HPK07', category: '2-in-1 Sets', name: 'Rose Gold & Black Pen Keyring Set', image: 'image/7.jpg' },
    { id: 'HPK08', category: '2-in-1 Sets', name: 'Silver Trim Pen & Rotating Keychain', image: 'image/8.jpg' },
    { id: 'HPK09', category: '2-in-1 Sets', name: 'Gold Accent Pen & Circular Keychain', image: 'image/9.jpg' },
    { id: 'HPK10', category: '2-in-1 Sets', name: 'Orange Leather Pen & Bottle Opener Keychain', image: 'image/10.jpg' },
    { id: 'HPK11', category: '2-in-1 Sets', name: 'Red Leather Pen & Bottle Opener Keychain Set', image: 'image/11.jpg' },
    { id: 'HPK12', category: '2-in-1 Sets', name: 'Grey Pen & Leather Bottle Opener Keychain Set', image: 'image/12.jpg' },
    { id: 'HPK13', category: '2-in-1 Sets', name: 'Matte Black Pen & Rectangular Keyring Set', image: 'image/13.jpg' },
    { id: 'HPK14', category: '2-in-1 Sets', name: 'Black Pen & Leather Bottle Opener Keychain Set', image: 'image/14.jpg' },
    { id: 'HPK15', category: '2-in-1 Sets', name: 'Blue Pen & Leather Bottle Opener Keychain Set', image: 'image/15.jpg' },
    { id: 'HPK16', category: '2-in-1 Sets', name: 'Silver Accent Pen & Rectangular Metal Keychain', image: 'image/16.jpg' },
    { id: 'HPK17', category: '2-in-1 Sets', name: 'CA Emblem Pen & Round Metal Keychain Set', image: 'image/17.jpg' },
    { id: 'HPK18', category: '2-in-1 Sets', name: 'Slim Black Pen & Round Black Keyring Set', image: 'image/18.jpg' },
    { id: 'HPK19', category: '2-in-1 Sets', name: 'Red & Black Sport Pen & Keyring Set', image: 'image/19.jpg' },
    { id: 'HPK20', category: '2-in-1 Sets', name: 'Caduceus Doctor Emblem Pen & Keychain Set', image: 'image/20.jpg' },
    { id: 'PC01', category: 'Cardholder Sets', name: 'Blue Leatherette Cardholder & Pen Set', image: 'image/21.jpg' },
    { id: 'PC02', category: 'Cardholder Sets', name: 'Matte Black Cardholder & Pen Set', image: 'image/22.jpg' },
    { id: 'PC03', category: 'Cardholder Sets', name: 'Textured Cyan Trim Cardholder & Stylus Pen Set', image: 'image/23.jpg' },
    { id: 'PC04', category: 'Cardholder Sets', name: 'Black & Silver Curved Pocket Cardholder Pen Set', image: 'image/24.jpg' },
    { id: 'PC05', category: 'Cardholder Sets', name: 'Executive Dual-Striped Metal Cardholder & Pen Set', image: 'image/25.jpg' },
    { id: 'PC06', category: 'Cardholder Sets', name: 'Tan Leatherette Cardholder & Matching Pen Set', image: 'image/26.jpg' },
    { id: 'PM01', category: 'Powerbank Sets', name: 'Portronics 10000mAh Powerbank & Desktop Mobile Stand Gift Set', image: 'image/27.jpg' },
    { id: 'WB01', category: 'Leather Sets', name: 'Classic Black PU Leather Wallet & Reversible Belt Gift Set', image: 'image/28.jpg' },
    { id: 'DP01', category: 'Diary Sets', name: 'Royal Blue Executive Hardbound Diary & Pen Gift Set', image: 'image/29.jpg' },
    { id: 'DP02', category: 'Diary Sets', name: 'Light Grey Hardbound Executive Diary & Pen Gift Set', image: 'image/30.jpg' },
    { id: 'DP03', category: 'Diary Sets', name: 'Elastic Band Hardbound Diary & Pen Set (Red, Blue, White)', image: 'image/31.jpg' },
    { id: 'DP04', category: 'Diary Sets', name: 'Classic Executive Diary & Matching Metal Pen Set', image: 'image/32.jpg' },
    { id: 'DP05', category: 'Diary Sets', name: 'Textured Leatherette Diary & Pen Combo', image: 'image/33.jpg' },
    { id: 'DP06', category: 'Diary Sets', name: 'Corporate Business Journal & Ball Pen Set', image: 'image/34.jpg' },
    { id: 'DP07', category: 'Diary Sets', name: 'Tan Leatherette Magnetic Strap Diary & Red Metal Pen Set', image: 'image/35.png' },
    { id: 'DP08', category: 'Diary Sets', name: 'Tan Brown Hardbound Diary & Matching Orange Pen Gift Set', image: 'image/36.png' },
    { id: 'DP09', category: 'Diary Sets', name: 'Dark Grey Textured Journal with Brass Buckle & Pen Set', image: 'image/37.png' },
    { id: 'DP10', category: 'Diary Sets', name: 'Two-Tone Grey Executive Diary with Silver Clip & Pen Set', image: 'image/38.png' },
    { id: 'DP11', category: 'Diary Sets', name: 'Classic Matte Black Magnetic Buckle Diary & Pen Set', image: 'image/39.png' },
    { id: 'DP12', category: 'Diary Sets', name: 'Navy Blue Leatherette Magnetic Buckle Diary & Pen Set', image: 'image/40.png' },
    { id: 'DP13', category: 'Diary Sets', name: 'Saddle Brown Textured Leatherette Journal with Antique Buckle & Pen Set', image: 'image/41.png' },
    { id: 'DP14', category: 'Diary Sets', name: 'Light Beige Executive Journal with Antique Buckle & Cream Pen Set', image: 'image/42.png' },
    { id: 'DP15', category: 'Diary Sets', name: 'Charcoal Black Soft Leatherette Journal with Brass Buckle & Pen Set', image: 'image/43.png' },
    { id: 'DP16', category: 'Diary Sets', name: 'Tan Brown Executive Diary with Dark Band & Matching Pen Set', image: 'image/44.png' },
    { id: 'DP17', category: 'Diary Sets', name: 'Matte Black Journal with Textured Center Band & Pen Set', image: 'image/45.png' },
    { id: 'ECO01', category: 'Eco Sets', name: 'Natural Cork Journal & Wooden Pen Eco Gift Set', image: 'image/46.png' },
    { id: 'DP18', category: 'Diary Sets', name: 'Grey Fabric Journal with Mobile/Card Pocket & Matching Pen Set', image: 'image/47.png' },
    { id: 'DP19', category: 'Diary Sets', name: 'Charcoal Fabric Journal with Mobile/Card Pocket & Pen Set', image: 'image/48.png' },
    { id: 'DP20', category: 'Diary Sets', name: 'Navy Textured Fabric Journal with Front Pocket & Pen Set', image: 'image/49.png' },
    { id: 'CKP02', category: '3-in-1 Sets', name: 'Black Cardholder, Keyring & Pen Executive Gift Set', image: 'image/51.png' },
    { id: 'CKP03', category: '3-in-1 Sets', name: 'Textured Grey Cardholder, Bottle Opener Keyring & Pen Set', image: 'image/52.png' },
    { id: 'CKP04', category: '3-in-1 Sets', name: 'Tan Brown Cardholder, Leather Keyring & Pen Gift Set', image: 'image/53.png' },
    { id: 'CKP05', category: '3-in-1 Sets', name: 'All-Black Executive Cardholder, Bottle Opener Keyring & Pen Set', image: 'image/54.png' },
    { id: 'CKP06', category: '3-in-1 Sets', name: 'Cross-Hatch Leatherette Cardholder, Keyring & Pen Gift Set', image: 'image/55.png' },
    { id: 'CKP07', category: '3-in-1 Sets', name: 'Tan Brown Leatherette Wallet, Bottle Opener Keyring & Red Pen Set', image: 'image/56.png' },
    { id: 'CKP08', category: '3-in-1 Sets', name: 'Textured Black Leather Wallet, Bottle Opener Keyring & Pen Set', image: 'image/57.png' },
    { id: 'CKP09', category: '3-in-1 Sets', name: 'Red Leatherette Cardholder, Bottle Opener Keyring & Red Pen Set', image: 'image/58.png' },
    { id: 'CKP10', category: '3-in-1 Sets', name: 'Royal Blue Leatherette Cardholder, Bottle Opener Keyring & Blue Pen Set', image: 'image/59.png' },
    { id: 'DPB02', category: 'Flask Sets', name: 'Royal Blue Vacuum Flask, Hardbound Diary & Pen Gift Set', image: 'image/61.png' },
    { id: 'CKP12', category: '3-in-1 Sets', name: 'Textured Grey Leatherette Cardholder, Keyring & Pen Set', image: 'image/62.png' },
    { id: 'DPB03', category: 'Flask Sets', name: 'All-Black Vacuum Flask, A5 Diary & Pen Executive Set', image: 'image/63.png' },
    { id: 'DPB05', category: 'Flask Sets', name: 'Black Leatherette Journal, Handle Vacuum Flask & Pen Set', image: 'image/65.png' },
    { id: 'DPB06', category: 'Flask Sets', name: 'Pure White Vacuum Flask, A5 Diary & White Pen Gift Set', image: 'image/66.png' },
    { id: 'DPB07', category: 'Flask Sets', name: 'Pristine White Journal, Carry-Loop Flask & Pen Set', image: 'image/67.png' },
    { id: 'DPB09', category: 'Flask Sets', name: 'Matte Black Travel Mug, Notebook & Black Pen Gift Set', image: 'image/69.png' },
    { id: 'DPB10', category: 'Flask Sets', name: 'Sleek Black Steel Flask, Elastic Diary & Pen Executive Set', image: 'image/70.png' },
    { id: 'ECO02', category: 'Eco Sets', name: 'Eco Bamboo Vacuum Flask, Cork Journal & Wooden Pen Set', image: 'image/71.png' },
    { id: 'DPB11', category: 'Flask Sets', name: 'Pure White Buckle Journal, Flip Travel Mug & Pen Set', image: 'image/72.png' },
    { id: 'DPB12', category: 'Flask Sets', name: 'Executive Black Buckle Journal, Flip Travel Mug & Pen Set', image: 'image/73.png' },
    { id: 'DPB13', category: 'Flask Sets', name: 'Minimalist White Elastic Journal, Flip Mug & Pen Set', image: 'image/74.png' },
    { id: 'ECO03', category: 'Eco Sets', name: 'Natural Wooden Grain Journal, Bamboo Flask & Pen Eco Gift Set', image: 'image/75.png' },
    { id: 'DPB15', category: 'Flask Sets', name: 'Matte Black Travel Mug, A5 Notebook & Stylus Pen Set', image: 'image/77.png' },
    { id: 'DPB16', category: 'Flask Sets', name: 'Textured Grey Fabric Journal, Sports Bottle & Black Pen Set', image: 'image/78.png' },
    { id: 'DPB18', category: 'Flask Sets', name: 'Tan Brown Leatherette Buckle Journal, Pen & Insulated Mug Gift Set', image: 'image/80.png' },
    { id: 'DPB19', category: 'Flask Sets', name: 'All-Black Executive Buckle Journal, Matte Pen & Insulated Mug Gift Set', image: 'image/81.png' },
    { id: 'DPB20', category: 'Flask Sets', name: 'Navy Blue Buckle Journal, Matching Pen & Insulated Mug Set', image: 'image/82.png' },
    { id: 'PM02', category: 'Powerbank Sets', name: 'Portronics Luxcell B12 10000mAh Powerbank, Passport Holder & Luggage Tag Set', image: 'image/83.png' },
    { id: 'DPB21', category: 'Flask Sets', name: 'Black Striped Executive Journal, Pen & Grip Insulated Mug Gift Set', image: 'image/84.png' },
    { id: 'EXC01', category: 'Executive Sets', name: 'All-Black Executive Elastic Notebook, Pen & Compact Foldable Umbrella Gift Set', image: 'image/85.png' },
    { id: 'EXC02', category: 'Executive Sets', name: 'Royal Blue Executive Journal, Pen & Foldable Umbrella Gift Set', image: 'image/86.png' },
    { id: 'EXC03', category: 'Executive Sets', name: 'Crimson Red Executive Journal, Pen & Foldable Umbrella Gift Set', image: 'image/87.png' },
    { id: 'EXC04', category: 'Executive Sets', name: 'Pristine White Elastic Notebook, Pen & Compact Foldable Umbrella Gift Set', image: 'image/88.png' },
    { id: '4IN1-01', category: '4-in-1 Sets', name: '4-in-1 All-Black Executive Gift Set (Buckle Diary, Cardholder, Keyring & Pen)', image: 'image/89.png' },
    { id: '4IN1-02', category: '4-in-1 Sets', name: '4-in-1 Tan Brown Executive Gift Set (Buckle Journal, Cardholder, Keyring & Pen)', image: 'image/90.png' },
    { id: '4IN1-03', category: '4-in-1 Sets', name: '4-in-1 Grey Fabric Journal Executive Combo (Front Pocket Journal, Cardholder, Keyring & Pen)', image: 'image/91.png' },
    { id: 'ECO04', category: 'Eco Sets', name: '4-in-1 Natural Cork Eco Gift Set (Cork Journal, Cardholder, Keyring & Pen)', image: 'image/92.png' },
    { id: '4IN1-04', category: '4-in-1 Sets', name: '4-in-1 Navy Blue Executive Gift Set (Magnetic Buckle Journal, Cardholder, Keyring & Pen)', image: 'image/93.png' },
    { id: '4IN1-05', category: '4-in-1 Sets', name: '4-in-1 Colorful Executive Gift Sets (Royal Blue & Crimson Red Notebook, Cardholder, Keyring & Pen)', image: 'image/94.png' },
    { id: '4IN1-06', category: '4-in-1 Sets', name: '4-in-1 Minimalist Matte Black Gift Set (Elastic Notebook, Textured Cardholder, Metal Keyring & Pen)', image: 'image/95.png' },
    { id: '4IN1-07', category: '4-in-1 Sets', name: '4-in-1 Royal Blue Leatherette Gift Set (Elastic Journal, Pocket Cardholder, Bottle Opener Keyring & Pen)', image: 'image/96.png' },
    { id: '4IN1-08', category: '4-in-1 Sets', name: '4-in-1 Matte Black Executive Gift Set (Elastic Journal, Leatherette Cardholder, Keyring & Pen)', image: 'image/97.png' },
    { id: '4IN1-09', category: '4-in-1 Sets', name: '4-in-1 Black Executive Journal & Accessories Set (Buckle Journal, Metallic Cardholder, Keyring & Pen)', image: 'image/98.png' },
    { id: '4IN1-10', category: '4-in-1 Sets', name: '4-in-1 Dual Color Executive Gift Sets (Blue/Red Elastic Journal, Leatherette Cardholder, Keyring & Pen)', image: 'image/99.png' },
    { id: '4IN1-11', category: '4-in-1 Sets', name: '4-in-1 Executive Textured Black Gift Set (Striped Journal, Textured Cardholder, Bottle Opener Keyring & Pen)', image: 'image/100.png' },
    { id: '4IN1-13', category: '4-in-1 Sets', name: '4-in-1 Crimson Red Vacuum Flask & Journal Gift Set (Red Flask, Elastic Journal, Keyring & Pen)', image: 'image/102.png' },
    { id: '4IN1-14', category: '4-in-1 Sets', name: '4-in-1 Matte Black Vacuum Flask & Journal Gift Set (Black Flask, Elastic Journal, Keyring & Pen)', image: 'image/103.png' },
    { id: '4IN1-15', category: '4-in-1 Sets', name: '4-in-1 Premium Executive Flask & Buckle Journal Gift Set (Loop Flask, Buckle Journal, Keyring & Pen)', image: 'image/104.png' },
    { id: 'ECO05', category: 'Eco Sets', name: '4-in-1 Natural Bamboo Executive Eco Gift Set (Bamboo Flask, Journal, Keyring & Pen)', image: 'image/106.png' },
    { id: '4IN1-17', category: '4-in-1 Sets', name: '4-in-1 Matte Black Travel Flask & Journal Gift Set (Sports Flask, Leatherette Notebook, Keyring & Pen)', image: 'image/107.png' },
    { id: 'EXC05', category: 'Executive Sets', name: '5-in-1 Executive Leatherette Laptop Bag & Travel Kit (Laptop Bag, Journal, Passport Holder, Pouch & Tech Roll)', image: 'image/108.png' },
    { id: 'EXC06', category: 'Executive Sets', name: '6-in-1 Premium Executive Corporate Gift Box (Buckle Journal, Vacuum Flask, Passport Holder, Cardholder, Keyring & Pen)', image: 'image/109.png' },
    { id: 'EXC07', category: 'Executive Sets', name: '6-in-1 Deluxe Executive Travel & Tech Hamper (Insulated Tumbler, Travel Wallet, Toiletry Pouch, Glasses Case, Luggage Tag & Pen)', image: 'image/110.png' },
    { id: 'EXC08', category: 'Executive Sets', name: '5-in-1 Executive Personalised Laptop Bag Set (Laptop Bag, Flip Tumbler, Buckle Journal, Keyring & Pen)', image: 'image/111.png' },
    { id: 'EXC09', category: 'Executive Sets', name: '7-in-1 Grand Bamboo & Canvas Executive Gift Hamper (Canvas Laptop Bag, Bamboo Flask, Mug, Journal, Cardholder, Keyring & Pen)', image: 'image/112.png' },
    { id: 'DW011', category: 'Drinkware', name: 'Matte Off-White Insulated Vacuum Bottle', image: 'image/116.png' },
    { id: 'DW012', category: 'Drinkware', name: 'Matte Charcoal Black Insulated Vacuum Bottle', image: 'image/117.png' },
    { id: 'DW013', category: 'Drinkware', name: 'Large Capacity Matte Black Insulated Travel Tumbler with Handle', image: 'image/118.png' },
    { id: 'DW018', category: 'Drinkware', name: 'Classic Pure White Ceramic Coffee Mug', image: 'image/123.png' },
    { id: 'LA01', category: 'Leather Accessories', name: 'Minimalist Leatherette Document Folder & Laptop Sleeve Set', image: 'image/128.png' },
    { id: 'LA02', category: 'Leather Accessories', name: 'Multifunctional Executive Leather Organizer & Padfolio with Pen & Card Slots', image: 'image/129.png' },
    { id: 'LA03', category: 'Leather Accessories', name: 'Textured Leatherette Magnetic Buckle Document Planner Portfolio', image: 'image/130.png' },
    { id: 'LA04', category: 'Travel Accessories', name: 'Executive Leather Travel Wallet & Document Organizer Set (Tan, Brown & Black)', image: 'image/131.png' },
    { id: 'LA05', category: 'Travel Accessories', name: 'Open Executive Passport & Boarding Pass Organizer Wallet', image: 'image/132.png' },
    { id: 'LA06', category: 'Travel Accessories', name: 'Premium Leatherette Utility Toiletry & Tech Accessories Pouch Set', image: 'image/133.png' },
    { id: 'LA07', category: 'Travel Accessories', name: 'Leatherette Grooming & Cosmetic Toiletry Pouch Kit', image: 'image/134.png' },
    { id: 'LA09', category: 'Leather Accessories', name: 'Premium Button Snap Leatherette Eyewear & Sunglass Case Collection', image: 'image/136.png' },
    { id: 'LA10', category: 'Leather Accessories', name: 'Executive Tri-Fold Leatherette Planner Padfolio with Pen & Coin Pocket', image: 'image/137.png' },
    { id: 'LA12', category: 'Travel Accessories', name: 'Zip-Around Executive Leather Travel Wallet & Passport Organizer (Internal Layout)', image: 'image/139.png' },
    { id: 'LA13', category: 'Travel Accessories', name: 'Zip-Around Executive Leather Travel Wallet Collection (Black, Tan, Blue & Mahogany)', image: 'image/140.png' },
    { id: 'PC07', category: 'Cardholder Sets', name: 'Foldable Zip Leather Wallet with Cash & Card Compartments', image: 'image/141.png' },
    { id: 'PC08', category: 'Cardholder Sets', name: 'Compact Square Zip Leatherette Pocket Wallet Color Variety', image: 'image/142.png' },
    { id: 'LA15', category: 'Leather Accessories', name: 'Open Envelope Style Leatherette Clutch Wallet with Multi-Card Slots', image: 'image/144.png' },
    { id: 'LA16', category: 'Travel Accessories', name: 'Colorful Leatherette Luggage Tag & Travel Identifier Collection', image: 'image/145.png' },
    { id: 'WB02', category: 'Leather Sets', name: 'Bifold Blue Leatherette Wallet with Zipper Coin Pocket & Cash Compartments', image: 'image/146.png' },
    { id: 'LA17', category: 'Leather Accessories', name: 'Magnetic Snap Leatherette Travel Planner & Document Sleeve (Mahogany, Tan & Black)', image: 'image/147.png' },
    { id: 'PC09', category: 'Cardholder Sets', name: 'Compact Bifold Leatherette Card & Cash Pocket Wallet Variety', image: 'image/149.png' },
    { id: 'PC10', category: 'Cardholder Sets', name: 'Pop-Up Aluminium Metal Cardholder with Leatherette Pocket Outer', image: 'image/150.png' },
    { id: 'WB03', category: 'Leather Sets', name: 'Executive Multi-Card Flip Bifold Leather Wallet', image: 'image/151.png' },
    { id: 'LA19', category: 'Leather Accessories', name: 'Classy Dark Brown Bifold Leather Wallet', image: 'image/152.png' },
    { id: 'LA20', category: 'Travel Accessories', name: 'Classic Leather Luggage Tag with Yellow Stitch Detail Collection', image: 'image/153.png' },
    { id: 'LA21', category: 'Travel Accessories', name: 'Minimalist Tan Leather Luggage Tag with Metal Buckle', image: 'image/154.png' },
    { id: 'LA21B', category: 'Travel Accessories', name: 'Saddle Tan Leather Luggage Tag with Button Snap Cover', image: 'image/155.png' },
    { id: 'LA22', category: 'Travel Accessories', name: 'Sleek Black Leather Luggage Tag with Button Closure Strap', image: 'image/156.png' },
    { id: 'LA23', category: 'Travel Accessories', name: 'Pristine White Leather Luggage Tag with Silver Buckle Strap', image: 'image/157.png' },
    { id: 'WI02', category: 'Writing Instruments', name: 'Stylus Tip Metallic Slim Ballpoint Pens (Blue, Red, White, Black)', image: 'image/158.png' },
    { id: 'WI03', category: 'Writing Instruments', name: 'Dual Silver Band Executive Ballpoint Pens Variety', image: 'image/159.png' },
    { id: 'WI04', category: 'Writing Instruments', name: 'Matte Finish Click Ballpoint Pens with Black Clip (Red, Grey, Blue)', image: 'image/160.png' },
    { id: 'WI05', category: 'Writing Instruments', name: 'Sleek Soft-Touch Twist Metal Pens (Black, Blue, Grey, Green, White)', image: 'image/161.png' },
    { id: 'WI06', category: 'Writing Instruments', name: 'All-Black Matte Executive Metal Pen Pair', image: 'image/162.png' },
    { id: 'WI07', category: 'Writing Instruments', name: 'Gold-Cap Executive Corporate Ballpoint Pens with Custom Branding Slot', image: 'image/163.png' },
    { id: 'WI08', category: 'Writing Instruments', name: 'Classic Black & Gold Accent Slim Rollerball Pens', image: 'image/164.png' },
    { id: 'WI09', category: 'Writing Instruments', name: 'Black Cap & Gold Trim Executive Pen Pair', image: 'image/165.png' },
    { id: 'WI10', category: 'Writing Instruments', name: 'Matte Black & Gold Curved Executive Pen Pair', image: 'image/166.png' },
    { id: 'WI11', category: 'Writing Instruments', name: 'Matte Grey Minimalist Wire-Clip Rollerball Pen Trio', image: 'image/167.png' },
    { id: 'WI12', category: 'Writing Instruments', name: 'Matte Black & Gold Wire-Clip Executive Rollerball Pen Trio', image: 'image/168.png' },
    { id: 'WI13', category: 'Writing Instruments', name: 'Gunmetal Grey Executive Capped Rollerball Pen Pair', image: 'image/169.png' },
    { id: 'WI14', category: 'Writing Instruments', name: 'Matte Black & Rose Gold Wire-Clip Rollerball Pen Trio', image: 'image/170.png' },
    { id: 'WI15', category: 'Writing Instruments', name: 'Metallic Gold Executive Capped Rollerball Pen Set', image: 'image/171.png' },
    { id: 'WI16', category: 'Writing Instruments', name: 'Metallic Color Variety Curved Ballpoint Pens Collection', image: 'image/172.png' },
    { id: 'WI17', category: 'Writing Instruments', name: 'Matte Black Minimalist Capped Gel Pen Pair', image: 'image/173.png' },
    { id: 'WI18', category: 'Writing Instruments', name: 'Glossy Black & Rose Gold Slim Executive Pen Set', image: 'image/174.png' },
    { id: 'WI19', category: 'Writing Instruments', name: 'Gunmetal & Rose Gold Trim Executive Rollerball Pen Pair', image: 'image/175.png' },
    { id: 'WI20', category: 'Writing Instruments', name: 'Metallic Copper Bronze Executive Ballpoint Pen Pair', image: 'image/176.png' },
    { id: 'WI21', category: 'Writing Instruments', name: 'Dual Black & Gold Stylus Metal Pens with Leatherette Sleeve', image: 'image/177.png' },
    { id: 'WI22', category: 'Writing Instruments', name: 'Matte Black Executive Pen Pair with Soft Leatherette Sleeve', image: 'image/178.png' },
    { id: 'PC12', category: 'Cardholder Sets', name: 'Classic Leatherette Business Card Case Assortment (Dark Brown, Tan, Black)', image: 'image/180.png' },
    { id: 'PC13', category: 'Cardholder Sets', name: 'Brushed Aluminium Metal Pocket Card Case (Open View)', image: 'image/181.png' },
    { id: 'PC14', category: 'Cardholder Sets', name: 'Sleek Brushed Metal Business Cardholder Case', image: 'image/182.png' },
    { id: 'PC15', category: 'Cardholder Sets', name: 'Black Leatherette & Stainless Steel Metal Card Case with Silver Plate', image: 'image/183.png' },
    { id: 'PC16', category: 'Cardholder Sets', name: 'Black Leatherette Magnetic Flip Business Card Case', image: 'image/184.png' },
    { id: 'PC17', category: 'Cardholder Sets', name: 'Dark Mahogany Leatherette Magnetic Flip Business Card Case', image: 'image/185.png' },
    { id: 'PC18', category: 'Cardholder Sets', name: 'Mahogany Brown Leatherette Pocket Business Card Case with Silver Accent', image: 'image/186.png' },
    { id: 'PC19', category: 'Cardholder Sets', name: 'Executive Black Leatherette & Stainless Steel Business Card Holder (Open View)', image: 'image/187.png' },
    { id: 'PC20', category: 'Cardholder Sets', name: 'Matte Black Leatherette Pocket Cardholder Case with Curved Silver Plate', image: 'image/188.png' },
    { id: 'PC21', category: 'Cardholder Sets', name: 'Saddle Brown Leatherette & Stainless Steel Card Case (Open View)', image: 'image/189.png' },
    { id: 'PC22', category: 'Cardholder Sets', name: 'Classic Saddle Brown Leatherette Pocket Card Case with Curved Silver Accent', image: 'image/190.png' },
    { id: 'PC23', category: 'Cardholder Sets', name: 'Sleek Black Leatherette Card Case with Gold Curved Accent Strip', image: 'image/191.png' },
    { id: 'PC24', category: 'Cardholder Sets', name: 'Executive Black Leatherette Flip Card Holder with Satin Lining (Open)', image: 'image/192.png' },
    { id: 'PC25', category: 'Cardholder Sets', name: 'Executive Brown Leatherette Flip Business Card Holder (Open View)', image: 'image/193.png' },
    { id: 'PC26', category: 'Cardholder Sets', name: 'Brown Leatherette Pocket Card Case with Gold Curved Accent Strip', image: 'image/194.png' },
    { id: 'PC27', category: 'Cardholder Sets', name: 'Matte Black Pocket Business Card Case with Satin Metallic Accent (Open)', image: 'image/195.png' },
    { id: 'PC28', category: 'Cardholder Sets', name: 'Matte Black Leatherette Card Case with Dual Parallel Silver Inlays', image: 'image/196.png' },
    { id: 'PC29', category: 'Cardholder Sets', name: 'Matte Black Leatherette Cardholder Case with Velvet Interior (Open)', image: 'image/197.png' },
    { id: 'PC30', category: 'Cardholder Sets', name: 'Cross-Hatch Textured Black Leatherette Card Case with Silver Angled Corner', image: 'image/198.png' },
    { id: 'PC31', category: 'Cardholder Sets', name: 'Black Leatherette Card Case with Smooth Silver Center Lip (Open)', image: 'image/199.png' },
    { id: 'PC32', category: 'Cardholder Sets', name: 'Black Ribbed Fabric Leatherette Pocket Card Case with Curved Silver Lip', image: 'image/200.png' },
    { id: 'PC33', category: 'Cardholder Sets', name: 'Brown Leatherette Flip Cardholder Case with Polished Gold Lip (Open)', image: 'image/201.png' },
    { id: 'PC34', category: 'Cardholder Sets', name: 'Dark Mahogany Leatherette Cardholder Case with Brushed Gold Lip', image: 'image/202.png' },
    { id: 'PC35', category: 'Cardholder Sets', name: 'Dark Mahogany Leatherette Cardholder Case with Silver Lip (Open)', image: 'image/203.png' },
    { id: 'PC36', category: 'Cardholder Sets', name: 'Rich Mahogany Leatherette Pocket Card Case with Curved Silver Lip', image: 'image/204.png' },
    { id: 'PC37', category: 'Cardholder Sets', name: 'Black Leatherette Flip Cardholder Case with Brushed Silver Lip (Open)', image: 'image/205.png' },
    { id: 'PC38', category: 'Cardholder Sets', name: 'Black Textured Leatherette Card Case with 3-Line Engraved Metal Plate', image: 'image/206.png' },
    { id: 'PC39', category: 'Cardholder Sets', name: 'Black Leatherette Flip Pocket Card Case with White Metallic Pocket Rim (Open)', image: 'image/207.png' },
    { id: 'PC40', category: 'Cardholder Sets', name: 'Matte Black Pocket Cardholder Case with Rectangular Silver Metallic Plate', image: 'image/208.png' },
    { id: 'PC41', category: 'Cardholder Sets', name: 'Black Textured Leatherette Curved Case with Silver Metallic Center Band', image: 'image/209.png' },
    { id: 'PC42', category: 'Cardholder Sets', name: 'Black Leatherette Multi-Card Wallet Case with Central Silver Accent Strip (Open)', image: 'image/210.png' },
    { id: 'PC43', category: 'Cardholder Sets', name: 'Black Leatherette Flip Cardholder Case with Silver Pocket Rim (Open)', image: 'image/211.png' },
    { id: 'PC44', category: 'Cardholder Sets', name: 'Black Cross-Hatch Textured Leatherette Cardholder Case with Silver Lip Accent', image: 'image/212.png' },
    { id: 'PC45', category: 'Cardholder Sets', name: 'Black Leatherette Magnetic Curved Flip Card Case (Open View)', image: 'image/213.png' },
    { id: 'PC46', category: 'Cardholder Sets', name: 'Black Smooth Leatherette Card Case with 3-Line Engraved Silver Plate', image: 'image/214.png' },
    { id: 'PC48', category: 'Cardholder Sets', name: 'Classic Leather Business Card Holder Pair (Dark Brown & Saddle Tan)', image: 'image/216.png' },
    { id: 'PC49', category: 'Cardholder Sets', name: 'Saddle Brown Leatherette Cardholder Case with Inner Pocket View (Open)', image: 'image/217.png' },
    { id: 'PC50', category: 'Cardholder Sets', name: 'Textured Brown Leatherette Card Case with Curved Wave Silver Lip Accent', image: 'image/218.png' },
    { id: 'PC51', category: 'Cardholder Sets', name: 'Black Leatherette Cardholder Case with Satin Velvet Lining (Open)', image: 'image/219.png' },
    { id: 'PC52', category: 'Cardholder Sets', name: 'Black Ribbed Fabric Leatherette Cardholder Case with Wave Silver Lip', image: 'image/220.png' },
    { id: 'PC53', category: 'Cardholder Sets', name: 'Black Leatherette Flip Cardholder Case with Silver Accent Rim (Open)', image: 'image/221.png' },
    { id: 'PC54', category: 'Cardholder Sets', name: 'Black Leatherette Card Case with Framed Rectangular Engraving Plate', image: 'image/222.png' },
    { id: 'PC55', category: 'Cardholder Sets', name: 'Black Leatherette Flip Card Case with Silver Name Slot Accent (Open)', image: 'image/223.png' },
    { id: 'PC56', category: 'Cardholder Sets', name: 'Textured Black Leatherette Pocket Card Case with Curved Silver Accent Lip', image: 'image/224.png' },
    { id: 'PC57', category: 'Cardholder Sets', name: 'Saddle Tan Leatherette Cardholder Case with Internal Pocket View (Open)', image: 'image/225.png' },
    { id: 'PC58', category: 'Cardholder Sets', name: 'Tan Leatherette Pocket Card Case with Curved Wave Silver Lip Accent', image: 'image/226.png' },
    { id: 'PC59', category: 'Cardholder Sets', name: 'Saddle Tan Leatherette Flip Cardholder Case with Silver Pocket Rim (Open)', image: 'image/227.png' },
    { id: 'PC60', category: 'Cardholder Sets', name: 'Saddle Tan Textured Leatherette Card Case with 3-Line Engraved Metal Plate', image: 'image/228.png' },
    { id: 'HPK23', category: '2-in-1 Sets', name: 'Dual Circular Swivel Metal Keyring Pair', image: 'image/231.png' },
    { id: 'HPK25', category: '2-in-1 Sets', name: 'Minimalist All-Black Leather Strap Metal Keychain', image: 'image/233.png' },
    { id: 'HPK26', category: '2-in-1 Sets', name: 'Black Leather Strap Keychain with Gold Accent Clip', image: 'image/234.png' },
    { id: 'HPK27', category: '2-in-1 Sets', name: 'Black Leather Strap Keychain with Rose Gold Metallic Clip', image: 'image/235.png' },
    { id: 'HPK28', category: '2-in-1 Sets', name: 'Dual Black Leatherette & Silver Metallic Bar Keyring Pair', image: 'image/236.png' },
    { id: 'DA01', category: 'Desktop Accessories', name: 'Metallic Desktop Mobile Phone & Sticky Note Stand Collection', image: 'image/242.png' },
    { id: 'DA02', category: 'Desktop Accessories', name: 'Adjustable 360 Rotating Desktop Smartphone Stand', image: 'image/243.png' },
    { id: 'DA03', category: 'Desktop Accessories', name: 'Adjustable Metal Smartphone Desk Holder Stand', image: 'image/244.png' },
    { id: 'DP25', category: 'Diary Sets', name: 'Charcoal Black Executive Journal with Textured Center Band & Plate Clip', image: 'image/252.png' },
    { id: 'DP26', category: 'Diary Sets', name: 'Saddle Brown Executive Journal with Textured Center Band & Plate Clip', image: 'image/253.png' },
    { id: 'DP27', category: 'Diary Sets', name: 'Slate Grey Executive Journal with Textured Center Band & Silver Plate Clip', image: 'image/254.png' },
    { id: 'DP29', category: 'Diary Sets', name: 'Dark Olive Executive Leatherette Journal with Ornate Square Brass Buckle Strap', image: 'image/256.png' },
    { id: 'DP30', category: 'Diary Sets', name: 'Charcoal Slate Executive Leatherette Journal with Ornate Square Brass Buckle Strap', image: 'image/257.png' },
    { id: 'DP31', category: 'Diary Sets', name: 'Saddle Tan Executive Leatherette Journal with Ornate Square Brass Buckle Strap', image: 'image/258.png' },
    { id: 'DP32', category: 'Diary Sets', name: 'Sage Green Executive Leatherette Journal with Ornate Square Brass Buckle Strap', image: 'image/259.png' },
    { id: 'DP33', category: 'Diary Sets', name: 'Matte Black Soft Leatherette Journal with Vertical Metallic Accent Inlay', image: 'image/260.png' },
    { id: 'DP34', category: 'Diary Sets', name: 'Royal Blue Leatherette Journal with Vertical Metallic Silver Accent Inlay', image: 'image/261.png' },
    { id: 'DP35', category: 'Diary Sets', name: 'Slate Grey Soft Leatherette Journal with Vertical Metallic Accent Strip', image: 'image/262.png' },
    { id: 'DP36', category: 'Diary Sets', name: 'Tan Brown Leatherette Journal with Vertical Metallic Silver Accent Inlay', image: 'image/263.png' },
    { id: 'DP37', category: 'Diary Sets', name: 'Classic Black Executive Hardbound Leatherette Journal', image: 'image/264.png' },
    { id: 'DP38', category: 'Diary Sets', name: 'Classic Grey Executive Hardbound Leatherette Journal', image: 'image/265.png' },
    { id: 'DP39', category: 'Diary Sets', name: 'Terracotta Red Executive Hardbound Leatherette Journal with Ribbon Bookmark', image: 'image/266.png' },
    { id: 'DP40', category: 'Diary Sets', name: 'Royal Blue Executive Hardbound Leatherette Journal with Ribbon Bookmark', image: 'image/267.png' }
];

let cart = {};
let activeCategory = 'All';
let selectedProduct = null;
let currentDrawerQty = 1;

// Helper to get full absolute image URL for WhatsApp sharing
function getFullImageUrl(imagePath) {
    if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
        return imagePath;
    }
    const baseUrl = window.location.origin + window.location.pathname.replace(/\/[^\/]*$/, '/');
    return baseUrl + imagePath;
}

// Dropdown Populate Function
function renderCategoryDropdown() {
    const categoryContainer = document.getElementById('category-tabs');
    if (!categoryContainer) return;

    categoryContainer.innerHTML = `
        <div class="w-full max-w-xs mx-auto py-2">
            <select id="category-select" onchange="setCategory(this.value)" 
                    class="w-full bg-white border border-gray-300 text-slate-900 text-xs sm:text-sm font-semibold rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 block p-2.5 shadow-sm outline-none cursor-pointer">
                ${categories.map(cat => `
                    <option value="${cat}" ${activeCategory === cat ? 'selected' : ''}>
                        ${cat === 'All' ? '🔍 All Categories' : cat}
                    </option>
                `).join('')}
            </select>
        </div>
    `;
}

function setCategory(category) {
    activeCategory = category;
    filterProducts();
}

function filterProducts() {
    const searchInput = document.getElementById('search-input');
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
    const grid = document.getElementById('product-grid');

    const filtered = products.filter(p => {
        const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
        const matchesSearch = p.name.toLowerCase().includes(searchTerm) || p.id.toLowerCase().includes(searchTerm);
        return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
        grid.innerHTML = `<div class="col-span-full text-center py-10 text-gray-500 text-xs sm:text-sm">No products found matching your search.</div>`;
        return;
    }

    grid.innerHTML = filtered.map(p => `
        <div class="bg-white rounded-lg shadow-sm border overflow-hidden flex flex-col justify-between hover:shadow-md transition">
            <div class="cursor-pointer group" onclick="openProductDrawer('${p.id}')">
                <div class="relative overflow-hidden bg-gray-50">
                    <img src="${p.image}" alt="${p.name}" 
                         onerror="this.onerror=null; this.src='https://placehold.co/300x200/1e293b/f59e0b?text=${p.id}';" 
                         class="w-full h-36 sm:h-44 object-cover group-hover:scale-105 transition duration-300">
                    <span class="absolute bottom-1 right-1 bg-slate-900/80 text-amber-400 text-[9px] px-1.5 py-0.5 rounded backdrop-blur-sm">Tap for details</span>
                </div>
                <div class="p-2 sm:p-3">
                    <span class="bg-amber-100 text-amber-800 text-[9px] sm:text-[10px] font-bold px-1.5 py-0.5 rounded">${p.id}</span>
                    <h3 class="font-bold text-xs sm:text-sm mt-1 text-slate-900 line-clamp-1">${p.name}</h3>
                    <p class="text-[10px] sm:text-xs text-gray-500">${p.category}</p>
                </div>
            </div>
            <div class="p-2 sm:p-3 pt-0">
                <button onclick="addToCart('${p.id}')" class="w-full bg-slate-900 hover:bg-amber-500 hover:text-slate-900 text-white font-semibold py-1 sm:py-1.5 rounded text-[11px] sm:text-xs transition">
                    + Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

// Side Drawer Functions for Product Details (Amazon Style: Full-width / Full-height Image View)
function openProductDrawer(productId) {
    selectedProduct = products.find(p => p.id === productId);
    if (!selectedProduct) return;

    currentDrawerQty = 1;
    
    const drawerContainer = document.getElementById('product-drawer');
    if (drawerContainer) {
        // Expand drawer width class on desktop if possible
        drawerContainer.classList.remove('max-w-md');
        drawerContainer.classList.add('max-w-xl');

        drawerContainer.innerHTML = `
            <div class="p-4 sm:p-6 h-full flex flex-col justify-between overflow-y-auto">
                <div class="flex justify-between items-center border-b pb-3 mb-4">
                    <h2 class="font-bold text-slate-900 text-base sm:text-lg">Product Details</h2>
                    <button onclick="closeProductDrawer()" class="text-gray-500 hover:text-slate-900 font-bold text-2xl px-2">&times;</button>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-center my-auto">
                    <!-- LEFT COLUMN: FULL SIZE AMAZON STYLE IMAGE -->
                    <div class="bg-white border rounded-xl overflow-hidden flex items-center justify-center p-2 sm:p-4 shadow-sm w-full h-64 sm:h-80">
                        <img id="drawer-image" src="${selectedProduct.image}" alt="${selectedProduct.name}" 
                             onerror="this.onerror=null; this.src='https://placehold.co/500x500/1e293b/f59e0b?text=${selectedProduct.id}';" 
                             class="w-full h-full object-contain hover:scale-110 transition duration-300">
                    </div>

                    <!-- RIGHT COLUMN: DETAILS & ACTIONS -->
                    <div class="flex flex-col justify-between space-y-4">
                        <div>
                            <span id="drawer-code" class="bg-amber-100 text-amber-800 text-xs font-bold px-2.5 py-1 rounded-md inline-block mb-2">${selectedProduct.id}</span>
                            <h2 id="drawer-name" class="font-bold text-slate-900 text-base sm:text-xl leading-snug">${selectedProduct.name}</h2>
                            <p id="drawer-category" class="text-xs sm:text-sm text-gray-500 mt-1">Category: <span class="font-medium text-slate-800">${selectedProduct.category}</span></p>
                        </div>

                        <!-- Quantity Selector -->
                        <div class="pt-3 border-t">
                            <label class="block text-xs font-semibold text-gray-600 mb-2">Select Quantity:</label>
                            <div class="flex items-center gap-3">
                                <button onclick="changeDrawerQty(-1)" class="w-9 h-9 rounded-lg border bg-gray-100 font-bold text-slate-800 hover:bg-gray-200 transition text-base">-</button>
                                <span id="drawer-qty" class="font-bold text-base sm:text-lg px-3">${currentDrawerQty}</span>
                                <button onclick="changeDrawerQty(1)" class="w-9 h-9 rounded-lg border bg-gray-100 font-bold text-slate-800 hover:bg-gray-200 transition text-base">+</button>
                            </div>
                        </div>

                        <!-- Action Buttons -->
                        <div class="space-y-2.5 pt-3">
                            <button onclick="addCurrentProductToCart()" class="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm shadow transition">
                                🛒 Add to Inquiry Cart
                            </button>
                            <button onclick="sendSingleWhatsAppInquiry()" class="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm flex items-center justify-center gap-2 shadow transition">
                                💬 Direct WhatsApp Inquiry
                            </button>
                        </div>
                    </div>
                </div>

                <div class="text-center pt-4 border-t text-[11px] text-gray-400 mt-4">
                    Fast Corporate Bulk Quotes via WhatsApp
                </div>
            </div>
        `;
    }

    document.getElementById('product-drawer').classList.remove('translate-x-full');
    document.getElementById('backdrop').classList.remove('hidden');
}

function closeProductDrawer() {
    document.getElementById('product-drawer').classList.add('translate-x-full');
    checkBackdrop();
}

function changeDrawerQty(delta) {
    currentDrawerQty = Math.max(1, currentDrawerQty + delta);
    const qtyElem = document.getElementById('drawer-qty');
    if (qtyElem) qtyElem.innerText = currentDrawerQty;
}

function addCurrentProductToCart() {
    if (!selectedProduct) return;
    
    if (cart[selectedProduct.id]) {
        cart[selectedProduct.id].qty += currentDrawerQty;
    } else {
        cart[selectedProduct.id] = { ...selectedProduct, qty: currentDrawerQty };
    }
    
    updateCartUI();
    closeProductDrawer();
    toggleCart();
}

function sendSingleWhatsAppInquiry() {
    if (!selectedProduct) return;

    const fullImgUrl = getFullImageUrl(selectedProduct.image);
    const message = `Hello, I am interested in inquiring about:\n\n*Code:* ${selectedProduct.id}\n*Product:* ${selectedProduct.name}\n*Quantity:* ${currentDrawerQty}\n*Image Link:* ${fullImgUrl}\n\nPlease share the pricing and availability.`;
    const whatsappUrl = `https://wa.me/${OWNER_WHATSAPP}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Cart Drawer Functions
function addToCart(productId) {
    if (cart[productId]) {
        cart[productId].qty += 1;
    } else {
        const product = products.find(p => p.id === productId);
        cart[productId] = { ...product, qty: 1 };
    }
    updateCartUI();
}

function updateQuantity(productId, change) {
    if (cart[productId]) {
        cart[productId].qty += change;
        if (cart[productId].qty <= 0) {
            delete cart[productId];
        }
    }
    updateCartUI();
}

function updateCartUI() {
    const totalCount = Object.values(cart).reduce((sum, item) => sum + item.qty, 0);
    const countBadge = document.getElementById('cart-count');
    const drawerBadge = document.getElementById('drawer-cart-count');
    if (countBadge) countBadge.innerText = totalCount;
    if (drawerBadge) drawerBadge.innerText = totalCount;

    const cartItemsContainer = document.getElementById('cart-items');
    if (!cartItemsContainer) return;
    
    if (Object.keys(cart).length === 0) {
        cartItemsContainer.innerHTML = `<div class="text-center py-12 text-gray-400 text-xs sm:text-sm">Your cart is empty. Tap items to add inquiries.</div>`;
        return;
    }

    cartItemsContainer.innerHTML = Object.values(cart).map(item => `
        <div class="py-3 flex justify-between items-center gap-2 border-b">
            <div class="flex items-center gap-2 flex-grow">
                <img src="${item.image}" class="w-10 h-10 object-cover rounded border" alt="${item.id}">
                <div>
                    <p class="font-bold text-xs text-slate-900">${item.id} - ${item.name}</p>
                    <p class="text-[10px] text-gray-500">${item.category}</p>
                </div>
            </div>
            <div class="flex items-center gap-2 bg-gray-100 rounded px-2 py-1">
                <button onclick="updateQuantity('${item.id}', -1)" class="text-gray-600 font-bold px-1 text-xs hover:text-slate-900">-</button>
                <span class="text-xs font-semibold px-1">${item.qty}</span>
                <button onclick="updateQuantity('${item.id}', 1)" class="text-gray-600 font-bold px-1 text-xs hover:text-slate-900">+</button>
            </div>
        </div>
    `).join('');
}

function toggleCart() {
    const cartDrawer = document.getElementById('cart-drawer');
    closeProductDrawer();
    if (cartDrawer) cartDrawer.classList.toggle('translate-x-full');
    checkBackdrop();
}

function closeAllDrawers() {
    const productDrawer = document.getElementById('product-drawer');
    const cartDrawer = document.getElementById('cart-drawer');
    const backdrop = document.getElementById('backdrop');
    if (productDrawer) productDrawer.classList.add('translate-x-full');
    if (cartDrawer) cartDrawer.classList.add('translate-x-full');
    if (backdrop) backdrop.classList.add('hidden');
}

function checkBackdrop() {
    const cartDrawer = document.getElementById('cart-drawer');
    const productDrawer = document.getElementById('product-drawer');
    const backdrop = document.getElementById('backdrop');

    const isCartOpen = cartDrawer && !cartDrawer.classList.contains('translate-x-full');
    const isProductOpen = productDrawer && !productDrawer.classList.contains('translate-x-full');
    
    if (backdrop) {
        if (isCartOpen || isProductOpen) {
            backdrop.classList.remove('hidden');
        } else {
            backdrop.classList.add('hidden');
        }
    }
}

// Checkout with Product Images Sent Directly in WhatsApp Message
function sendToWhatsApp() {
    const items = Object.values(cart);
    if (items.length === 0) {
        alert('Please add at least one item to the cart first!');
        return;
    }

    let message = "Hello, I would like to inquire about the following corporate gifts:\n\n";
    items.forEach((item, index) => {
        const fullImgUrl = getFullImageUrl(item.image);
        message += `${index + 1}. Code: *${item.id}* | Qty: *${item.qty}*\n   Name: ${item.name}\n   Image: ${fullImgUrl}\n\n`;
    });
    message += "Please let me know the availability and pricing.";

    const whatsappUrl = `https://wa.me/${OWNER_WHATSAPP}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Initialise App
renderCategoryDropdown();
filterProducts();