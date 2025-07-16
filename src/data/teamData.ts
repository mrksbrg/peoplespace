export interface TeamMember {
  name: string
  status: 'In Office' | 'Remote' | 'Out Today'
  location: string | null
  avatar: string
  initials: string
}

export interface TeamData {
  [teamName: string]: TeamMember[]
}

export const teams = ['UX Design', 'Engineering', 'Quality Assurance', 'Sales', 'Product']

export const teamMembers: TeamData = {
  'UX Design': [
    // Swedish names
    { name: 'Erik Andersson', status: 'In Office', location: '2nd Floor – UX Wing', avatar: '/placeholder.svg', initials: 'EA' },
    { name: 'Anna Lindberg', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'AL' },
    { name: 'Oskar Nilsson', status: 'In Office', location: '2nd Floor – UX Wing', avatar: '/placeholder.svg', initials: 'ON' },
    { name: 'Sara Johansson', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'SJ' },
    { name: 'Gustaf Larsson', status: 'Out Today', location: null, avatar: '/placeholder.svg', initials: 'GL' },
    { name: 'Emma Karlsson', status: 'In Office', location: '2nd Floor – UX Wing', avatar: '/placeholder.svg', initials: 'EK' },
    { name: 'Viktor Petersson', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'VP' },
    { name: 'Maja Svensson', status: 'In Office', location: '2nd Floor – UX Wing', avatar: '/placeholder.svg', initials: 'MS' },
    { name: 'Lucas Berg', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'LB' },
    { name: 'Astrid Gustafsson', status: 'Out Today', location: null, avatar: '/placeholder.svg', initials: 'AG' },
    { name: 'Felix Holm', status: 'In Office', location: '2nd Floor – UX Wing', avatar: '/placeholder.svg', initials: 'FH' },
    { name: 'Ida Nordström', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'IN' },
    { name: 'William Hedberg', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'WH' },
    { name: 'Elin Forsberg', status: 'In Office', location: '2nd Floor – UX Wing', avatar: '/placeholder.svg', initials: 'EF' },
    { name: 'Alexander Strand', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'AS' },
    { name: 'Olivia Nyberg', status: 'Out Today', location: null, avatar: '/placeholder.svg', initials: 'OV' },
    { name: 'Hugo Blomqvist', status: 'In Office', location: '2nd Floor – UX Wing', avatar: '/placeholder.svg', initials: 'HB' },
    { name: 'Alva Ekström', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'AE' },
    { name: 'Noah Sandberg', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'NS' },
    // International names
    { name: 'Li Wei', status: 'In Office', location: '2nd Floor – UX Wing', avatar: '/placeholder.svg', initials: 'LW' },
    { name: 'Priya Sharma', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'PS' },
    { name: 'Ahmed Hassan', status: 'Out Today', location: null, avatar: '/placeholder.svg', initials: 'AH' },
    { name: 'Marko Petrović', status: 'In Office', location: '2nd Floor – UX Wing', avatar: '/placeholder.svg', initials: 'MP' },
    { name: 'Klaus Weber', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'KW' },
    { name: 'Fatima Ali', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'FA' },
  ],
  'Engineering': [
    // Swedish names
    { name: 'Johan Åberg', status: 'In Office', location: '2nd Floor – Dev Zone', avatar: '/placeholder.svg', initials: 'JÅ' },
    { name: 'Linus Engström', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'LE' },
    { name: 'Hanna Wickström', status: 'In Office', location: '2nd Floor – Dev Zone', avatar: '/placeholder.svg', initials: 'HW' },
    { name: 'Sebastian Lindqvist', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'SL' },
    { name: 'Rebecka Holmberg', status: 'In Office', location: '2nd Floor – Dev Zone', avatar: '/placeholder.svg', initials: 'RH' },
    { name: 'Anton Mårtensson', status: 'Out Today', location: null, avatar: '/placeholder.svg', initials: 'AM' },
    { name: 'Klara Davidsson', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'KD' },
    { name: 'Mattias Öhman', status: 'In Office', location: '2nd Floor – Dev Zone', avatar: '/placeholder.svg', initials: 'MÖ' },
    { name: 'Isabelle Lundgren', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'IL' },
    { name: 'Carl Ericsson', status: 'In Office', location: '2nd Floor – Dev Zone', avatar: '/placeholder.svg', initials: 'CE' },
    { name: 'Lovisa Sjögren', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'LS' },
    { name: 'Adrian Wallin', status: 'In Office', location: '2nd Floor – Dev Zone', avatar: '/placeholder.svg', initials: 'AW' },
    { name: 'Thea Falk', status: 'Out Today', location: null, avatar: '/placeholder.svg', initials: 'TF' },
    { name: 'Nils Henriksson', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'NH' },
    { name: 'Stella Håkansson', status: 'In Office', location: '2nd Floor – Dev Zone', avatar: '/placeholder.svg', initials: 'SH' },
    { name: 'Marcus Lindberg', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'ML' },
    { name: 'Tilde Öberg', status: 'In Office', location: '2nd Floor – Dev Zone', avatar: '/placeholder.svg', initials: 'TÖ' },
    { name: 'Elias Nordahl', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'EN' },
    { name: 'Moa Lundberg', status: 'In Office', location: '2nd Floor – Dev Zone', avatar: '/placeholder.svg', initials: 'ML2' },
    { name: 'Benjamin Nyström', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'BN' },
    { name: 'Cornelia Viklund', status: 'Out Today', location: null, avatar: '/placeholder.svg', initials: 'CV' },
    { name: 'Filip Andersson', status: 'In Office', location: '2nd Floor – Dev Zone', avatar: '/placeholder.svg', initials: 'FA2' },
    { name: 'Agnes Dahlberg', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'AD' },
    { name: 'Leo Hedström', status: 'In Office', location: '2nd Floor – Dev Zone', avatar: '/placeholder.svg', initials: 'LH' },
    { name: 'Nellie Isaksson', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'NI' },
    { name: 'Charlie Månsson', status: 'In Office', location: '2nd Floor – Dev Zone', avatar: '/placeholder.svg', initials: 'CM' },
    { name: 'Vera Lundström', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'VL' },
    { name: 'Leon Blomberg', status: 'Out Today', location: null, avatar: '/placeholder.svg', initials: 'LB2' },
    { name: 'Wilma Eklund', status: 'In Office', location: '2nd Floor – Dev Zone', avatar: '/placeholder.svg', initials: 'WE' },
    { name: 'Theodor Fransson', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'TF2' },
    { name: 'Tuva Nordin', status: 'In Office', location: '2nd Floor – Dev Zone', avatar: '/placeholder.svg', initials: 'TN' },
    { name: 'Isak Johansson', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'IJ' },
    { name: 'Ellen Ström', status: 'In Office', location: '2nd Floor – Dev Zone', avatar: '/placeholder.svg', initials: 'ES' },
    // International names
    { name: 'Chen Ming', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'CM2' },
    { name: 'Arjun Patel', status: 'In Office', location: '2nd Floor – Dev Zone', avatar: '/placeholder.svg', initials: 'AP' },
    { name: 'Muhammad Khan', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'MK' },
    { name: 'Amina Begović', status: 'Out Today', location: null, avatar: '/placeholder.svg', initials: 'AB' },
    { name: 'Stefan Mueller', status: 'In Office', location: '2nd Floor – Dev Zone', avatar: '/placeholder.svg', initials: 'SM' },
    { name: 'Lucia Romano', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'LR' },
    { name: 'Omar Al-Rashid', status: 'In Office', location: '2nd Floor – Dev Zone', avatar: '/placeholder.svg', initials: 'OR' },
    { name: 'Rajesh Kumar', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'RK' },
    { name: 'Emir Hadzic', status: 'In Office', location: '2nd Floor – Dev Zone', avatar: '/placeholder.svg', initials: 'EH' },
    { name: 'Hans Fischer', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'HF' },
    { name: 'Wang Lei', status: 'Out Today', location: null, avatar: '/placeholder.svg', initials: 'WL' },
    { name: 'Aisha Malik', status: 'In Office', location: '2nd Floor – Dev Zone', avatar: '/placeholder.svg', initials: 'AM2' },
  ],
  'Quality Assurance': [
    // Swedish names
    { name: 'Saga Holmström', status: 'In Office', location: '2nd Floor – Test Rigs', avatar: '/placeholder.svg', initials: 'SH2' },
    { name: 'Theodor Lindahl', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'TL' },
    { name: 'Ingrid Sundström', status: 'In Office', location: '2nd Floor – Test Rigs', avatar: '/placeholder.svg', initials: 'IS' },
    { name: 'Vilhelm Carlsson', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'VC' },
    { name: 'Sigrid Blomberg', status: 'Out Today', location: null, avatar: '/placeholder.svg', initials: 'SB' },
    { name: 'Gustav Martinsson', status: 'In Office', location: '2nd Floor – Test Rigs', avatar: '/placeholder.svg', initials: 'GM' },
    { name: 'Hedvig Westberg', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'HV' },
    { name: 'Albin Rydberg', status: 'In Office', location: '2nd Floor – Test Rigs', avatar: '/placeholder.svg', initials: 'AR2' },
    { name: 'Siri Lund', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'SL2' },
    { name: 'Edvin Palmberg', status: 'In Office', location: '2nd Floor – Test Rigs', avatar: '/placeholder.svg', initials: 'EP' },
    { name: 'Nova Lindström', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'NL' },
    { name: 'Melvin Hjelm', status: 'Out Today', location: null, avatar: '/placeholder.svg', initials: 'MH' },
    { name: 'Iris Andersson', status: 'In Office', location: '2nd Floor – Test Rigs', avatar: '/placeholder.svg', initials: 'IA' },
    { name: 'Vincent Holmqvist', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'VH' },
    { name: 'Juni Persson', status: 'In Office', location: '2nd Floor – Test Rigs', avatar: '/placeholder.svg', initials: 'JP' },
    // International names
    { name: 'Yang Xiao', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'YX' },
    { name: 'Kavya Singh', status: 'In Office', location: '2nd Floor – Test Rigs', avatar: '/placeholder.svg', initials: 'KS' },
    { name: 'Amir Hussein', status: 'Out Today', location: null, avatar: '/placeholder.svg', initials: 'AH2' },
    { name: 'Petra Kovačević', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'PK' },
    { name: 'Marco Bianchi', status: 'In Office', location: '2nd Floor – Test Rigs', avatar: '/placeholder.svg', initials: 'MB' },
  ],
  'Sales': [
    // Swedish names
    { name: 'Matilda Stenberg', status: 'In Office', location: '3rd Floor – Sales', avatar: '/placeholder.svg', initials: 'MS2' },
    { name: 'Eddie Lundqvist', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'EL' },
    { name: 'Freja Thorsson', status: 'In Office', location: '3rd Floor – Sales', avatar: '/placeholder.svg', initials: 'FT' },
    { name: 'Alfred Samuelsson', status: 'Out Today', location: null, avatar: '/placeholder.svg', initials: 'AS2' },
    { name: 'Molly Lindgren', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'ML3' },
    { name: 'Max Fredriksson', status: 'In Office', location: '3rd Floor – Sales', avatar: '/placeholder.svg', initials: 'MF' },
    { name: 'Alba Nyman', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'AN' },
    { name: 'Sigge Åkerlund', status: 'In Office', location: '3rd Floor – Sales', avatar: '/placeholder.svg', initials: 'SÅ' },
    { name: 'Elvira Backman', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'EB' },
    { name: 'Melker Jansson', status: 'In Office', location: '3rd Floor – Sales', avatar: '/placeholder.svg', initials: 'MJ' },
    { name: 'Lovis Lundberg', status: 'Out Today', location: null, avatar: '/placeholder.svg', initials: 'LL' },
    { name: 'Ville Sundberg', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'VS' },
    { name: 'Svea Magnusson', status: 'In Office', location: '3rd Floor – Sales', avatar: '/placeholder.svg', initials: 'SM2' },
    { name: 'Walter Dahlström', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'WD' },
    { name: 'Lova Karlberg', status: 'In Office', location: '3rd Floor – Sales', avatar: '/placeholder.svg', initials: 'LK' },
    { name: 'Valter Axelsson', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'VA' },
    { name: 'Celine Björk', status: 'In Office', location: '3rd Floor – Sales', avatar: '/placeholder.svg', initials: 'CB' },
    { name: 'Sigurd Hedberg', status: 'Out Today', location: null, avatar: '/placeholder.svg', initials: 'SH3' },
    { name: 'Selma Palmgren', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'SP2' },
    { name: 'Otto Norberg', status: 'In Office', location: '3rd Floor – Sales', avatar: '/placeholder.svg', initials: 'ON2' },
    { name: 'Disa Hallberg', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'DH' },
    { name: 'Dante Bergman', status: 'In Office', location: '3rd Floor – Sales', avatar: '/placeholder.svg', initials: 'DB' },
    { name: 'Stina Öhman', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'SÖ' },
    // International names
    { name: 'Liu Jiajia', status: 'In Office', location: '3rd Floor – Sales', avatar: '/placeholder.svg', initials: 'LJ' },
    { name: 'Deepak Gupta', status: 'Out Today', location: null, avatar: '/placeholder.svg', initials: 'DG' },
    { name: 'Sabrina Jovic', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'SJ2' },
    { name: 'Ingrid Schmidt', status: 'In Office', location: '3rd Floor – Sales', avatar: '/placeholder.svg', initials: 'IS2' },
    { name: 'Zara Ahmad', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'ZA' },
    { name: 'Francesco Rossi', status: 'In Office', location: '3rd Floor – Sales', avatar: '/placeholder.svg', initials: 'FR' },
    { name: 'Layla Al-Zahra', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'LZ' },
  ],
  'Product': [
    // Swedish names
    { name: 'Arvid Eklöf', status: 'In Office', location: '2nd Floor – Collaboration', avatar: '/placeholder.svg', initials: 'AE2' },
    { name: 'Alma Hedström', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'AH3' },
    { name: 'Milton Norberg', status: 'In Office', location: '2nd Floor – Collaboration', avatar: '/placeholder.svg', initials: 'MN' },
    { name: 'Edith Sandström', status: 'Out Today', location: null, avatar: '/placeholder.svg', initials: 'ES2' },
    { name: 'Hampus Lindahl', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'HL' },
    { name: 'Vera Svensson', status: 'In Office', location: '2nd Floor – Collaboration', avatar: '/placeholder.svg', initials: 'VS2' },
    { name: 'Sixten Holm', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'SH4' },
    { name: 'Elsa Bergström', status: 'In Office', location: '2nd Floor – Collaboration', avatar: '/placeholder.svg', initials: 'EB2' },
    { name: 'Frank Olsson', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'FO' },
    { name: 'Tyra Lindqvist', status: 'In Office', location: '2nd Floor – Collaboration', avatar: '/placeholder.svg', initials: 'TL2' },
    { name: 'Folke Andersen', status: 'Out Today', location: null, avatar: '/placeholder.svg', initials: 'FA3' },
    { name: 'Tove Sundqvist', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'TS' },
    { name: 'Lars-Gunnar Lundgren', status: 'In Office', location: '2nd Floor – Collaboration', avatar: '/placeholder.svg', initials: 'IV' },
    { name: 'Saga Eriksson', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'SE' },
    { name: 'Ture Blomqvist', status: 'In Office', location: '2nd Floor – Collaboration', avatar: '/placeholder.svg', initials: 'TB2' },
    { name: 'Smilla Karlsson', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'SK' },
    { name: 'Noel Hedberg', status: 'In Office', location: '2nd Floor – Collaboration', avatar: '/placeholder.svg', initials: 'NH2' },
    { name: 'Rut Lindström', status: 'Out Today', location: null, avatar: '/placeholder.svg', initials: 'RL' },
    { name: 'Viggo Sandberg', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'VG' },
    { name: 'Ester Sköld', status: 'In Office', location: '2nd Floor – Collaboration', avatar: '/placeholder.svg', initials: 'EL2' },
    { name: 'Ludvig Blomberg', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'LB3' },
    { name: 'Lilly Holmberg', status: 'In Office', location: '2nd Floor – Collaboration', avatar: '/placeholder.svg', initials: 'LH2' },
    { name: 'Alve Nilsson', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'AV' },
    // International names
    { name: 'Zhou Lin', status: 'In Office', location: '2nd Floor – Collaboration', avatar: '/placeholder.svg', initials: 'ZL' },
    { name: 'Neha Verma', status: 'Out Today', location: null, avatar: '/placeholder.svg', initials: 'NV' },
    { name: 'Hasan Mehic', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'HM' },
    { name: 'Martina Berger', status: 'In Office', location: '2nd Floor – Collaboration', avatar: '/placeholder.svg', initials: 'MA' },
    { name: 'Diego Silva', status: 'Remote', location: null, avatar: '/placeholder.svg', initials: 'DS' },
    { name: 'Sophie Dubois', status: 'In Office', location: '2nd Floor – Collaboration', avatar: '/placeholder.svg', initials: 'SD' },
  ]
}

// Helper function to get all colleagues as a flat array with team info
export const getAllColleagues = () => {
  const allColleagues: (TeamMember & { team: string; id: number })[] = []
  let id = 1
  
  Object.entries(teamMembers).forEach(([teamName, members]) => {
    members.forEach(member => {
      allColleagues.push({
        ...member,
        team: teamName,
        id: id++
      })
    })
  })
  
  return allColleagues
}