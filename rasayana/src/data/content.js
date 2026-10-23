export const AWARDS = [
  ['Michelin Guide', 'One Star, 2025'],
  ["Asia's 50 Best", 'No. 18'],
  ['Condé Nast Traveller', 'Best New Restaurant'],
  ['Hot Tables', 'Chef of the Year'],
]

export const MENUS = {
  'Seven courses': { price: '₹8,500', items: [
    ['Kesar Kshira', 'Saffron-set milk custard, charred corn, smoked chilli oil.', 'Opening'],
    ['Jal Tarang', 'Hand-dived scallop, tender coconut water, green mango, curry leaf.', 'Sea'],
    ['Tandoor Kali', 'Black-garlic sourdough, cultured butter, wild honey.', 'Bread'],
    ['Dum Gucchi', 'Morel mushrooms sealed under dough and steamed with whole spices.', 'Earth'],
    ['Raja Raan', 'Twelve-hour lamb shoulder, kashmiri chilli jus, pickled walnut.', 'Fire'],
    ['Mishti Mitra', 'Burnt jaggery ice cream, rose petal, toasted fennel.', 'Sweet'],
    ['Paan Pause', 'Betel leaf, gulkand, cardamom ash.', 'Close'],
  ]},
  'Ten courses': { price: '₹12,500', items: [
    ['Kesar Kshira', 'Saffron-set milk custard, charred corn, smoked chilli oil.', 'Opening'],
    ['Anda Amrit', 'Slow egg yolk, truffle ghee, crisp rice paper.', 'Gentle'],
    ['Jal Tarang', 'Hand-dived scallop, tender coconut water, green mango.', 'Sea'],
    ['Malabar Prawn', 'Tiger prawn, kokum beurre blanc, banana-stem salad.', 'Sea'],
    ['Dum Gucchi', 'Morels steamed under dough with whole spices.', 'Earth'],
    ['Kabab-e-Khaas', 'Aged duck, pomegranate molasses, charred shallot.', 'Fire'],
    ['Raja Raan', 'Twelve-hour lamb shoulder, kashmiri chilli jus.', 'Fire'],
    ['Nimbu Sorbet', 'Gondhoraj lime, black salt, mint dew.', 'Reset'],
    ['Mishti Mitra', 'Burnt jaggery ice cream, rose petal, toasted fennel.', 'Sweet'],
    ['Paan Pause', 'Betel leaf, gulkand, cardamom ash.', 'Close'],
  ]},
  'Garden (vegetarian)': { price: '₹7,200', items: [
    ['Bhutta Bisque', 'Roasted corn, saffron foam, popped sorghum.', 'Opening'],
    ['Beet Rasa', 'Salt-baked beetroot, whipped chhena, wild thyme.', 'Earth'],
    ['Dum Gucchi', 'Morels steamed under dough with whole spices.', 'Earth'],
    ['Paneer Patra', 'Fresh cheese in colocasia leaf, tamarind caramel.', 'Fire'],
    ['Gur Tart', 'Jaggery tart, smoked cream, edible gold.', 'Sweet'],
  ]},
}

export const SIGNATURE = [
  { kind: 'custard',  name: 'Kesar Kshira',  tag: 'Opening',  price: '₹1,400', desc: 'Saffron-set milk custard with charred corn and smoked chilli oil.' },
  { kind: 'scallop',  name: 'Jal Tarang',    tag: 'From the sea', price: '₹1,900', desc: 'Hand-dived scallop in tender coconut water with green mango.' },
  { kind: 'mushroom', name: 'Dum Gucchi',    tag: 'From the earth', price: '₹2,200', desc: 'Morels sealed under dough and steamed with whole spices.' },
  { kind: 'lamb',     name: 'Raja Raan',     tag: 'From the fire', price: '₹2,600', desc: 'Twelve-hour lamb shoulder with kashmiri chilli jus and pickled walnut.' },
  { kind: 'bread',    name: 'Tandoor Kali',  tag: 'Bread',    price: '₹900',  desc: 'Black-garlic sourdough with cultured butter and wild honey.' },
  { kind: 'dessert',  name: 'Mishti Mitra',  tag: 'Sweet',    price: '₹1,300', desc: 'Burnt jaggery ice cream with rose petal and toasted fennel.' },
]