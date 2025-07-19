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
    { name: 'Erik Andersson', status: 'In Office', location: '2nd Floor – UX Wing', avatar: '/avatars/avatar-001.jpg', initials: 'EA' },
    { name: 'Anders Lindberg', status: 'Remote', location: null, avatar: '/avatars/avatar-002.jpg', initials: 'AL' },
    { name: 'Oskar Nilsson', status: 'In Office', location: '2nd Floor – UX Wing', avatar: '/avatars/avatar-003.jpg', initials: 'ON' },
    { name: 'Sara Johansson', status: 'Remote', location: null, avatar: '/avatars/avatar-004.jpg', initials: 'SJ' },
    { name: 'Gustaf Larsson', status: 'Out Today', location: null, avatar: '/avatars/avatar-005.jpg', initials: 'GL' },
    { name: 'Emma Karlsson', status: 'In Office', location: '2nd Floor – UX Wing', avatar: '/avatars/avatar-006.jpg', initials: 'EK' },
    { name: 'Viktor Petersson', status: 'Remote', location: null, avatar: '/avatars/avatar-007.jpg', initials: 'VP' },
    { name: 'Maja Svensson', status: 'In Office', location: '2nd Floor – UX Wing', avatar: '/avatars/avatar-008.jpg', initials: 'MS' },
    { name: 'Lucas Berg', status: 'Remote', location: null, avatar: '/avatars/avatar-009.jpg', initials: 'LB' },
    { name: 'Astrid Gustafsson', status: 'Out Today', location: null, avatar: '/avatars/avatar-010.jpg', initials: 'AG' },
    { name: 'Felix Holm', status: 'In Office', location: '2nd Floor – UX Wing', avatar: '/avatars/avatar-011.jpg', initials: 'FH' },
    { name: 'Ida Nordström', status: 'Remote', location: null, avatar: '/avatars/avatar-012.jpg', initials: 'IN' },
    { name: 'William Hedberg', status: 'Remote', location: null, avatar: '/avatars/avatar-013.jpg', initials: 'WH' },
    { name: 'Elin Forsberg', status: 'In Office', location: '2nd Floor – UX Wing', avatar: '/avatars/avatar-014.jpg', initials: 'EF' },
    { name: 'Alexander Strand', status: 'Remote', location: null, avatar: '/avatars/avatar-015.jpg', initials: 'AS' },
    { name: 'Olivia Nyberg', status: 'Out Today', location: null, avatar: '/avatars/avatar-016.jpg', initials: 'OV' },
    { name: 'Hugo Blomqvist', status: 'In Office', location: '2nd Floor – UX Wing', avatar: '/avatars/avatar-017.jpg', initials: 'HB' },
    { name: 'Alva Ekström', status: 'Remote', location: null, avatar: '/avatars/avatar-018.jpg', initials: 'AE' },
    { name: 'Noah Sandberg', status: 'Remote', location: null, avatar: '/avatars/avatar-019.jpg', initials: 'NS' },
    // International names
    { name: 'Li Wei', status: 'In Office', location: '2nd Floor – UX Wing', avatar: '/avatars/avatar-020.jpg', initials: 'LW' },
    { name: 'Priya Sharma', status: 'Remote', location: null, avatar: '/avatars/avatar-021.jpg', initials: 'PS' },
    { name: 'Ahmed Hassan', status: 'Out Today', location: null, avatar: '/avatars/avatar-022.jpg', initials: 'AH' },
    { name: 'Marko Petrović', status: 'In Office', location: '2nd Floor – UX Wing', avatar: '/avatars/avatar-023.jpg', initials: 'MP' },
    { name: 'Klaus Weber', status: 'Remote', location: null, avatar: '/avatars/avatar-024.jpg', initials: 'KW' },
    { name: 'Fatima Ali', status: 'Remote', location: null, avatar: '/avatars/avatar-025.jpg', initials: 'FA' },
  ],
  'Engineering': [
    // Swedish names
    { name: 'Johan Åberg', status: 'In Office', location: '2nd Floor – Dev Zone', avatar: '/avatars/avatar-026.jpg', initials: 'JÅ' },
    { name: 'Linus Engström', status: 'Remote', location: null, avatar: '/avatars/avatar-027.jpg', initials: 'LE' },
    { name: 'Hanna Wickström', status: 'In Office', location: '2nd Floor – Dev Zone', avatar: '/avatars/avatar-028.jpg', initials: 'HW' },
    { name: 'Sebastian Lindqvist', status: 'Remote', location: null, avatar: '/avatars/avatar-029.jpg', initials: 'SL' },
    { name: 'Rebecka Holmberg', status: 'In Office', location: '2nd Floor – Dev Zone', avatar: '/avatars/avatar-030.jpg', initials: 'RH' },
    { name: 'Anton Mårtensson', status: 'Out Today', location: null, avatar: '/avatars/avatar-031.jpg', initials: 'AM' },
    { name: 'Klara Davidsson', status: 'Remote', location: null, avatar: '/avatars/avatar-032.jpg', initials: 'KD' },
    { name: 'Mattias Öhman', status: 'In Office', location: '2nd Floor – Dev Zone', avatar: '/avatars/avatar-033.jpg', initials: 'MÖ' },
    { name: 'Isabelle Lundgren', status: 'Remote', location: null, avatar: '/avatars/avatar-034.jpg', initials: 'IL' },
    { name: 'Carl Ericsson', status: 'In Office', location: '2nd Floor – Dev Zone', avatar: '/avatars/avatar-035.jpg', initials: 'CE' },
    { name: 'Lovisa Sjögren', status: 'Remote', location: null, avatar: '/avatars/avatar-036.jpg', initials: 'LS' },
    { name: 'Adrian Wallin', status: 'In Office', location: '2nd Floor – Dev Zone', avatar: '/avatars/avatar-037.jpg', initials: 'AW' },
    { name: 'Thea Falk', status: 'Out Today', location: null, avatar: '/avatars/avatar-038.jpg', initials: 'TF' },
    { name: 'Nils Henriksson', status: 'Remote', location: null, avatar: '/avatars/avatar-039.jpg', initials: 'NH' },
    { name: 'Stella Håkansson', status: 'In Office', location: '2nd Floor – Dev Zone', avatar: '/avatars/avatar-040.jpg', initials: 'SH' },
    { name: 'Marcus Lindberg', status: 'Remote', location: null, avatar: '/avatars/avatar-041.jpg', initials: 'ML' },
    { name: 'Tilde Öberg', status: 'In Office', location: '2nd Floor – Dev Zone', avatar: '/avatars/avatar-042.jpg', initials: 'TÖ' },
    { name: 'Elias Nordahl', status: 'Remote', location: null, avatar: '/avatars/avatar-043.jpg', initials: 'EN' },
    { name: 'Moa Lundberg', status: 'In Office', location: '2nd Floor – Dev Zone', avatar: '/avatars/avatar-044.jpg', initials: 'ML2' },
    { name: 'Benjamin Nyström', status: 'Remote', location: null, avatar: '/avatars/avatar-045.jpg', initials: 'BN' },
    { name: 'Cornelia Viklund', status: 'Out Today', location: null, avatar: '/avatars/avatar-046.jpg', initials: 'CV' },
    { name: 'Filip Andersson', status: 'In Office', location: '2nd Floor – Dev Zone', avatar: '/avatars/avatar-047.jpg', initials: 'FA2' },
    { name: 'Agnes Dahlberg', status: 'Remote', location: null, avatar: '/avatars/avatar-048.jpg', initials: 'AD' },
    { name: 'Leo Hedström', status: 'In Office', location: '2nd Floor – Dev Zone', avatar: '/avatars/avatar-049.jpg', initials: 'LH' },
    { name: 'Nellie Isaksson', status: 'Remote', location: null, avatar: '/avatars/avatar-050.jpg', initials: 'NI' },
    { name: 'Charlie Månsson', status: 'In Office', location: '2nd Floor – Dev Zone', avatar: '/avatars/avatar-051.jpg', initials: 'CM' },
    { name: 'Vera Lundström', status: 'Remote', location: null, avatar: '/avatars/avatar-052.jpg', initials: 'VL' },
    { name: 'Leon Blomberg', status: 'Out Today', location: null, avatar: '/avatars/avatar-053.jpg', initials: 'LB2' },
    { name: 'Wilma Eklund', status: 'In Office', location: '2nd Floor – Dev Zone', avatar: '/avatars/avatar-054.jpg', initials: 'WE' },
    { name: 'Theodor Fransson', status: 'Remote', location: null, avatar: '/avatars/avatar-055.jpg', initials: 'TF2' },
    { name: 'Tuva Nordin', status: 'In Office', location: '2nd Floor – Dev Zone', avatar: '/avatars/avatar-056.jpg', initials: 'TN' },
    { name: 'Isak Johansson', status: 'Remote', location: null, avatar: '/avatars/avatar-057.jpg', initials: 'IJ' },
    { name: 'Ellen Ström', status: 'In Office', location: '2nd Floor – Dev Zone', avatar: '/avatars/avatar-058.jpg', initials: 'ES' },
    // International names
    { name: 'Chen Ming', status: 'Remote', location: null, avatar: '/avatars/avatar-059.jpg', initials: 'CM2' },
    { name: 'Arjun Patel', status: 'In Office', location: '2nd Floor – Dev Zone', avatar: '/avatars/avatar-060.jpg', initials: 'AP' },
    { name: 'Muhammad Khan', status: 'Remote', location: null, avatar: '/avatars/avatar-061.jpg', initials: 'MK' },
    { name: 'Amina Begović', status: 'Out Today', location: null, avatar: '/avatars/avatar-062.jpg', initials: 'AB' },
    { name: 'Stefan Mueller', status: 'In Office', location: '2nd Floor – Dev Zone', avatar: '/avatars/avatar-063.jpg', initials: 'SM' },
    { name: 'Lucia Romano', status: 'Remote', location: null, avatar: '/avatars/avatar-064.jpg', initials: 'LR' },
    { name: 'Omar Al-Rashid', status: 'In Office', location: '2nd Floor – Dev Zone', avatar: '/avatars/avatar-065.jpg', initials: 'OR' },
    { name: 'Rajesh Kumar', status: 'Remote', location: null, avatar: '/avatars/avatar-066.jpg', initials: 'RK' },
    { name: 'Emir Hadzic', status: 'In Office', location: '2nd Floor – Dev Zone', avatar: '/avatars/avatar-067.jpg', initials: 'EH' },
    { name: 'Hans Fischer', status: 'Remote', location: null, avatar: '/avatars/avatar-068.jpg', initials: 'HF' },
    { name: 'Wang Lei', status: 'Out Today', location: null, avatar: '/avatars/avatar-069.jpg', initials: 'WL' },
    { name: 'Aisha Malik', status: 'In Office', location: '2nd Floor – Dev Zone', avatar: '/avatars/avatar-001.jpg', initials: 'AM2' },
  ],
  'Quality Assurance': [
    // Swedish names
    { name: 'Saga Holmström', status: 'In Office', location: '2nd Floor – Test Rigs', avatar: '/avatars/avatar-002.jpg', initials: 'SH2' },
    { name: 'Theodor Lindahl', status: 'Remote', location: null, avatar: '/avatars/avatar-004.jpg', initials: 'TL' },
    { name: 'Ingrid Sundström', status: 'In Office', location: '2nd Floor – Test Rigs', avatar: '/avatars/avatar-006.jpg', initials: 'IS' },
    { name: 'Vilhelm Carlsson', status: 'Remote', location: null, avatar: '/avatars/avatar-008.jpg', initials: 'VC' },
    { name: 'Sigrid Blomberg', status: 'Out Today', location: null, avatar: '/avatars/avatar-010.jpg', initials: 'SB' },
    { name: 'Gustav Martinsson', status: 'In Office', location: '2nd Floor – Test Rigs', avatar: '/avatars/avatar-012.jpg', initials: 'GM' },
    { name: 'Hedvig Westberg', status: 'Remote', location: null, avatar: '/avatars/avatar-014.jpg', initials: 'HV' },
    { name: 'Albin Rydberg', status: 'In Office', location: '2nd Floor – Test Rigs', avatar: '/avatars/avatar-016.jpg', initials: 'AR2' },
    { name: 'Siri Lund', status: 'Remote', location: null, avatar: '/avatars/avatar-018.jpg', initials: 'SL2' },
    { name: 'Edvin Palmberg', status: 'In Office', location: '2nd Floor – Test Rigs', avatar: '/avatars/avatar-020.jpg', initials: 'EP' },
    { name: 'Nova Lindström', status: 'Remote', location: null, avatar: '/avatars/avatar-022.jpg', initials: 'NL' },
    { name: 'Melvin Hjelm', status: 'Out Today', location: null, avatar: '/avatars/avatar-024.jpg', initials: 'MH' },
    { name: 'Iris Andersson', status: 'In Office', location: '2nd Floor – Test Rigs', avatar: '/avatars/avatar-002.jpg', initials: 'IA' },
    { name: 'Vincent Holmqvist', status: 'Remote', location: null, avatar: '/avatars/avatar-001.jpg', initials: 'VH' },
    { name: 'Juni Persson', status: 'In Office', location: '2nd Floor – Test Rigs', avatar: '/avatars/avatar-004.jpg', initials: 'JP' },
    // International names
    { name: 'Yang Xiao', status: 'Remote', location: null, avatar: '/avatars/avatar-006.jpg', initials: 'YX' },
    { name: 'Kavya Singh', status: 'In Office', location: '2nd Floor – Test Rigs', avatar: '/avatars/avatar-008.jpg', initials: 'KS' },
    { name: 'Amir Hussein', status: 'Out Today', location: null, avatar: '/avatars/avatar-010.jpg', initials: 'AH2' },
    { name: 'Petra Kovačević', status: 'Remote', location: null, avatar: '/avatars/avatar-012.jpg', initials: 'PK' },
    { name: 'Marco Bianchi', status: 'In Office', location: '2nd Floor – Test Rigs', avatar: '/avatars/avatar-014.jpg', initials: 'MB' },
  ],
  'Sales': [
    // Swedish names
    { name: 'Matilda Stenberg', status: 'In Office', location: '3rd Floor – Sales', avatar: '/avatars/avatar-016.jpg', initials: 'MS2' },
    { name: 'Eddie Lundqvist', status: 'Remote', location: null, avatar: '/avatars/avatar-018.jpg', initials: 'EL' },
    { name: 'Freja Thorsson', status: 'In Office', location: '3rd Floor – Sales', avatar: '/avatars/avatar-020.jpg', initials: 'FT' },
    { name: 'Alfred Samuelsson', status: 'Out Today', location: null, avatar: '/avatars/avatar-022.jpg', initials: 'AS2' },
    { name: 'Molly Lindgren', status: 'Remote', location: null, avatar: '/avatars/avatar-024.jpg', initials: 'ML3' },
    { name: 'Max Fredriksson', status: 'In Office', location: '3rd Floor – Sales', avatar: '/avatars/avatar-026.jpg', initials: 'MF' },
    { name: 'Alba Nyman', status: 'Remote', location: null, avatar: '/avatars/avatar-028.jpg', initials: 'AN' },
    { name: 'Sigge Åkerlund', status: 'In Office', location: '3rd Floor – Sales', avatar: '/avatars/avatar-030.jpg', initials: 'SÅ' },
    { name: 'Elvira Backman', status: 'Remote', location: null, avatar: '/avatars/avatar-032.jpg', initials: 'EB' },
    { name: 'Melker Jansson', status: 'In Office', location: '3rd Floor – Sales', avatar: '/avatars/avatar-034.jpg', initials: 'MJ' },
    { name: 'Lovis Lundberg', status: 'Out Today', location: null, avatar: '/avatars/avatar-036.jpg', initials: 'LL' },
    { name: 'Ville Sundberg', status: 'Remote', location: null, avatar: '/avatars/avatar-038.jpg', initials: 'VS' },
    { name: 'Svea Magnusson', status: 'In Office', location: '3rd Floor – Sales', avatar: '/avatars/avatar-040.jpg', initials: 'SM2' },
    { name: 'Walter Dahlström', status: 'Remote', location: null, avatar: '/avatars/avatar-042.jpg', initials: 'WD' },
    { name: 'Lova Karlberg', status: 'In Office', location: '3rd Floor – Sales', avatar: '/avatars/avatar-044.jpg', initials: 'LK' },
    { name: 'Valter Axelsson', status: 'Remote', location: null, avatar: '/avatars/avatar-046.jpg', initials: 'VA' },
    { name: 'Celine Björk', status: 'In Office', location: '3rd Floor – Sales', avatar: '/avatars/avatar-048.jpg', initials: 'CB' },
    { name: 'Sigurd Hedberg', status: 'Out Today', location: null, avatar: '/avatars/avatar-050.jpg', initials: 'SH3' },
    { name: 'Selma Palmgren', status: 'Remote', location: null, avatar: '/avatars/avatar-052.jpg', initials: 'SP2' },
    { name: 'Otto Norberg', status: 'In Office', location: '3rd Floor – Sales', avatar: '/avatars/avatar-054.jpg', initials: 'ON2' },
    { name: 'Disa Hallberg', status: 'Remote', location: null, avatar: '/avatars/avatar-056.jpg', initials: 'DH' },
    { name: 'Dante Bergman', status: 'In Office', location: '3rd Floor – Sales', avatar: '/avatars/avatar-058.jpg', initials: 'DB' },
    { name: 'Stina Öhman', status: 'Remote', location: null, avatar: '/avatars/avatar-060.jpg', initials: 'SÖ' },
    // International names
    { name: 'Liu Jiajia', status: 'In Office', location: '3rd Floor – Sales', avatar: '/avatars/avatar-062.jpg', initials: 'LJ' },
    { name: 'Deepak Gupta', status: 'Out Today', location: null, avatar: '/avatars/avatar-064.jpg', initials: 'DG' },
    { name: 'Sabrina Jovic', status: 'Remote', location: null, avatar: '/avatars/avatar-066.jpg', initials: 'SJ2' },
    { name: 'Ingrid Schmidt', status: 'In Office', location: '3rd Floor – Sales', avatar: '/avatars/avatar-068.jpg', initials: 'IS2' },
    { name: 'Zara Ahmad', status: 'Remote', location: null, avatar: '/avatars/avatar-001.jpg', initials: 'ZA' },
    { name: 'Francesco Rossi', status: 'In Office', location: '3rd Floor – Sales', avatar: '/avatars/avatar-003.jpg', initials: 'FR' },
    { name: 'Layla Al-Zahra', status: 'Remote', location: null, avatar: '/avatars/avatar-005.jpg', initials: 'LZ' },
  ],
  'Product': [
    // Swedish names
    { name: 'Arvid Eklöf', status: 'In Office', location: '2nd Floor – Collaboration', avatar: '/avatars/avatar-007.jpg', initials: 'AE2' },
    { name: 'Alma Hedström', status: 'Remote', location: null, avatar: '/avatars/avatar-009.jpg', initials: 'AH3' },
    { name: 'Milton Norberg', status: 'In Office', location: '2nd Floor – Collaboration', avatar: '/avatars/avatar-011.jpg', initials: 'MN' },
    { name: 'Edith Sandström', status: 'Out Today', location: null, avatar: '/avatars/avatar-013.jpg', initials: 'ES2' },
    { name: 'Hampus Lindahl', status: 'Remote', location: null, avatar: '/avatars/avatar-015.jpg', initials: 'HL' },
    { name: 'Vera Svensson', status: 'In Office', location: '2nd Floor – Collaboration', avatar: '/avatars/avatar-017.jpg', initials: 'VS2' },
    { name: 'Sixten Holm', status: 'Remote', location: null, avatar: '/avatars/avatar-019.jpg', initials: 'SH4' },
    { name: 'Elsa Bergström', status: 'In Office', location: '2nd Floor – Collaboration', avatar: '/avatars/avatar-021.jpg', initials: 'EB2' },
    { name: 'Frank Olsson', status: 'Remote', location: null, avatar: '/avatars/avatar-023.jpg', initials: 'FO' },
    { name: 'Tyra Lindqvist', status: 'In Office', location: '2nd Floor – Collaboration', avatar: '/avatars/avatar-025.jpg', initials: 'TL2' },
    { name: 'Folke Andersen', status: 'Out Today', location: null, avatar: '/avatars/avatar-027.jpg', initials: 'FA3' },
    { name: 'Tove Sundqvist', status: 'Remote', location: null, avatar: '/avatars/avatar-029.jpg', initials: 'TS' },
    { name: 'Lars-Gunnar Lundgren', status: 'In Office', location: '2nd Floor – Collaboration', avatar: '/avatars/avatar-031.jpg', initials: 'IV' },
    { name: 'Saga Eriksson', status: 'Remote', location: null, avatar: '/avatars/avatar-033.jpg', initials: 'SE' },
    { name: 'Ture Blomqvist', status: 'In Office', location: '2nd Floor – Collaboration', avatar: '/avatars/avatar-035.jpg', initials: 'TB2' },
    { name: 'Smilla Karlsson', status: 'Remote', location: null, avatar: '/avatars/avatar-037.jpg', initials: 'SK' },
    { name: 'Noel Hedberg', status: 'In Office', location: '2nd Floor – Collaboration', avatar: '/avatars/avatar-039.jpg', initials: 'NH2' },
    { name: 'Rut Lindström', status: 'Out Today', location: null, avatar: '/avatars/avatar-041.jpg', initials: 'RL' },
    { name: 'Viggo Sandberg', status: 'Remote', location: null, avatar: '/avatars/avatar-043.jpg', initials: 'VG' },
    { name: 'Ester Sköld', status: 'In Office', location: '2nd Floor – Collaboration', avatar: '/avatars/avatar-045.jpg', initials: 'EL2' },
    { name: 'Ludvig Blomberg', status: 'Remote', location: null, avatar: '/avatars/avatar-047.jpg', initials: 'LB3' },
    { name: 'Lilly Holmberg', status: 'In Office', location: '2nd Floor – Collaboration', avatar: '/avatars/avatar-049.jpg', initials: 'LH2' },
    { name: 'Alve Nilsson', status: 'Remote', location: null, avatar: '/avatars/avatar-051.jpg', initials: 'AV' },
    // International names
    { name: 'Zhou Lin', status: 'In Office', location: '2nd Floor – Collaboration', avatar: '/avatars/avatar-053.jpg', initials: 'ZL' },
    { name: 'Neha Verma', status: 'Out Today', location: null, avatar: '/avatars/avatar-055.jpg', initials: 'NV' },
    { name: 'Hasan Mehic', status: 'Remote', location: null, avatar: '/avatars/avatar-057.jpg', initials: 'HM' },
    { name: 'Martina Berger', status: 'In Office', location: '2nd Floor – Collaboration', avatar: '/avatars/avatar-059.jpg', initials: 'MA' },
    { name: 'Diego Silva', status: 'Remote', location: null, avatar: '/avatars/avatar-061.jpg', initials: 'DS' },
    { name: 'Sophie Dubois', status: 'In Office', location: '2nd Floor – Collaboration', avatar: '/avatars/avatar-063.jpg', initials: 'SD' },
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