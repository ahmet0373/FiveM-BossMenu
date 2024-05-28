
// // event listener
// window.addEventListener('message', function(event) {
//     func = event.data.daten.func;
//     daten = event.data.daten
//     myFuncs[func](daten);
//     console.log(JSON.stringify(daten))
// })

// funcs for event listener

var spieler = [
    
        {
            "vorname" : "Miha",
            "nachname" : "Nowotny",
            "geburtsdatum" : "17/10/2003",
            "geschlecht" : "M",
            "fahndung" : "Stufe 4",
            "id" : "31"
        },
        {
            "vorname" : "Miha",
            "nachname" : "Nowotny",
            "geburtsdatum" : "17/10/2003",
            "geschlecht" : "M",
            "fahndung" : "Stufe 4",
            "id" : "31"
        },
        {
            "vorname" : "Miha",
            "nachname" : "Nowotny",
            "geburtsdatum" : "17/10/2003",
            "geschlecht" : "M",
            "fahndung" : "Stufe 4",
            "id" : "31"
        },
        {
            "vorname" : "Miha",
            "nachname" : "Nowotny",
            "geburtsdatum" : "17/10/2003",
            "geschlecht" : "M",
            "fahndung" : "Stufe 4",
            "id" : "31"
        },
        {
            "vorname" : "Miha",
            "nachname" : "Nowotny",
            "geburtsdatum" : "17/10/2003",
            "geschlecht" : "M",
            "fahndung" : "Stufe 4",
            "id" : "31"
        },
        {
            "vorname" : "Miha",
            "nachname" : "Nowotny",
            "geburtsdatum" : "17/10/2003",
            "geschlecht" : "M",
            "fahndung" : "Stufe 4",
            "id" : "31"
        },
        {
            "vorname" : "Miha",
            "nachname" : "Nowotny",
            "geburtsdatum" : "17/10/2003",
            "geschlecht" : "M",
            "fahndung" : "Stufe 4",
            "id" : "31"
        },
        {
            "vorname" : "Miha",
            "nachname" : "Nowotny",
            "geburtsdatum" : "17/10/2003",
            "geschlecht" : "M",
            "fahndung" : "Stufe 4",
            "id" : "31"
        },
        {
            "vorname" : "Miha",
            "nachname" : "Nowotny",
            "geburtsdatum" : "17/10/2003",
            "geschlecht" : "M",
            "fahndung" : "Stufe 4",
            "id" : "31"
        },
        {
            "vorname" : "Miha",
            "nachname" : "Nowotny",
            "geburtsdatum" : "17/10/2003",
            "geschlecht" : "M",
            "fahndung" : "Stufe 4",
            "id" : "31"
        },
        {
            "vorname" : "Miha",
            "nachname" : "Nowotny",
            "geburtsdatum" : "17/10/2003",
            "geschlecht" : "M",
            "fahndung" : "Stufe 4",
            "id" : "31"
        },
        {
            "vorname" : "Miha",
            "nachname" : "Nowotny",
            "geburtsdatum" : "17/10/2003",
            "geschlecht" : "M",
            "fahndung" : "Stufe 4",
            "id" : "31"
        },
        {
            "vorname" : "Miha",
            "nachname" : "Nowotny",
            "geburtsdatum" : "17/10/2003",
            "geschlecht" : "M",
            "fahndung" : "Stufe 4",
            "id" : "31"
        },
        {
            "vorname" : "Miha",
            "nachname" : "Nowotny",
            "geburtsdatum" : "17/10/2003",
            "geschlecht" : "M",
            "fahndung" : "Stufe 4",
            "id" : "31"
        },
        {
            "vorname" : "Miha",
            "nachname" : "Nowotny",
            "geburtsdatum" : "17/10/2003",
            "geschlecht" : "M",
            "fahndung" : "Stufe 4",
            "id" : "31"
        }
]

var berichte = [
    
    {
        "titel" : "Casino Schießerei",
        "aktenzeichen" : "653425",
        "ort" : "Casino",
        "datum" : "17/10/2003",
        "status" : "In Arbeit",
        "typ" : "Einsatzbericht"
    },
    {
        "titel" : "Casino Schießerei",
        "aktenzeichen" : "653425",
        "ort" : "Casino",
        "datum" : "17/10/2003",
        "status" : "In Arbeit",
        "typ" : "Einsatzbericht"
    },
    {
        "titel" : "Casino Schießerei",
        "aktenzeichen" : "653425",
        "ort" : "Casino",
        "datum" : "17/10/2003",
        "status" : "In Arbeit",
        "typ" : "Einsatzbericht"
    },
    {
        "titel" : "Casino Schießerei",
        "aktenzeichen" : "653425",
        "ort" : "Casino",
        "datum" : "17/10/2003",
        "status" : "In Arbeit",
        "typ" : "Einsatzbericht"
    },
    {
        "titel" : "Casino Schießerei",
        "aktenzeichen" : "653425",
        "ort" : "Casino",
        "datum" : "17/10/2003",
        "status" : "In Arbeit",
        "typ" : "Einsatzbericht"
    },
    {
        "titel" : "Casino Schießerei",
        "aktenzeichen" : "653425",
        "ort" : "Casino",
        "datum" : "17/10/2003",
        "status" : "In Arbeit",
        "typ" : "Einsatzbericht"
    },
    {
        "titel" : "Casino Schießerei",
        "aktenzeichen" : "653425",
        "ort" : "Casino",
        "datum" : "17/10/2003",
        "status" : "In Arbeit",
        "typ" : "Einsatzbericht"
    },
    {
        "titel" : "Casino Schießerei",
        "aktenzeichen" : "653425",
        "ort" : "Casino",
        "datum" : "17/10/2003",
        "status" : "In Arbeit",
        "typ" : "Einsatzbericht"
    },
    {
        "titel" : "Casino Schießerei",
        "aktenzeichen" : "653425",
        "ort" : "Casino",
        "datum" : "17/10/2003",
        "status" : "In Arbeit",
        "typ" : "Einsatzbericht"
    },
    {
        "titel" : "Casino Schießerei",
        "aktenzeichen" : "653425",
        "ort" : "Casino",
        "datum" : "17/10/2003",
        "status" : "In Arbeit",
        "typ" : "Einsatzbericht"
    },
    {
        "titel" : "Casino Schießerei",
        "aktenzeichen" : "653425",
        "ort" : "Casino",
        "datum" : "17/10/2003",
        "status" : "In Arbeit",
        "typ" : "Einsatzbericht"
    },
    {
        "titel" : "Casino Schießerei",
        "aktenzeichen" : "653425",
        "ort" : "Casino",
        "datum" : "17/10/2003",
        "status" : "In Arbeit",
        "typ" : "Einsatzbericht"
    },
    {
        "titel" : "Casino Schießerei",
        "aktenzeichen" : "653425",
        "ort" : "Casino",
        "datum" : "17/10/2003",
        "status" : "In Arbeit",
        "typ" : "Einsatzbericht"
    },
    {
        "titel" : "Casino Schießerei",
        "aktenzeichen" : "653425",
        "ort" : "Casino",
        "datum" : "17/10/2003",
        "status" : "In Arbeit",
        "typ" : "Einsatzbericht"
    },
    {
        "titel" : "Casino Schießerei",
        "aktenzeichen" : "653425",
        "ort" : "Casino",
        "datum" : "17/10/2003",
        "status" : "In Arbeit",
        "typ" : "Einsatzbericht"
    },
    {
        "titel" : "Casino Schießerei",
        "aktenzeichen" : "653425",
        "ort" : "Casino",
        "datum" : "17/10/2003",
        "status" : "In Arbeit",
        "typ" : "Einsatzbericht"
    },
    {
        "titel" : "Casino Schießerei",
        "aktenzeichen" : "653425",
        "ort" : "Casino",
        "datum" : "17/10/2003",
        "status" : "In Arbeit",
        "typ" : "Einsatzbericht"
    },
    {
        "titel" : "Casino Schießerei",
        "aktenzeichen" : "653425",
        "ort" : "Casino",
        "datum" : "17/10/2003",
        "status" : "In Arbeit",
        "typ" : "Einsatzbericht"
    },
    {
        "titel" : "Casino Schießerei",
        "aktenzeichen" : "653425",
        "ort" : "Casino",
        "datum" : "17/10/2003",
        "status" : "In Arbeit",
        "typ" : "Einsatzbericht"
    },
    {
        "titel" : "Casino Schießerei",
        "aktenzeichen" : "653425",
        "ort" : "Casino",
        "datum" : "17/10/2003",
        "status" : "In Arbeit",
        "typ" : "Einsatzbericht"
    }
]

var mitarbeiter = [
    
    {
        "vorname" : "Miha",
        "nachname" : "Nowotny",
        "dienstnummer" : "69",
        "rang" : "pd chief",
        "nummer" : "1929210",
        "status" : "online",
        "id" : "31"
    },
    {
        "vorname" : "Miha",
        "nachname" : "Nowotny",
        "dienstnummer" : "69",
        "rang" : "pd chief",
        "nummer" : "1929210",
        "status" : "online",
        "id" : "31"
    },
    {
        "vorname" : "Miha",
        "nachname" : "Nowotny",
        "dienstnummer" : "69",
        "rang" : "pd chief",
        "nummer" : "1929210",
        "status" : "online",
        "id" : "31"
    },
    {
        "vorname" : "Miha",
        "nachname" : "Nowotny",
        "dienstnummer" : "69",
        "rang" : "pd chief",
        "nummer" : "1929210",
        "status" : "online",
        "id" : "31"
    },
    {
        "vorname" : "Miha",
        "nachname" : "Nowotny",
        "dienstnummer" : "69",
        "rang" : "pd chief",
        "nummer" : "1929210",
        "status" : "online",
        "id" : "31"
    },
    {
        "vorname" : "Miha",
        "nachname" : "Nowotny",
        "dienstnummer" : "69",
        "rang" : "pd chief",
        "nummer" : "1929210",
        "status" : "online",
        "id" : "31"
    },
    {
        "vorname" : "Miha",
        "nachname" : "Nowotny",
        "dienstnummer" : "69",
        "rang" : "pd chief",
        "nummer" : "1929210",
        "status" : "online",
        "id" : "31"
    },
    {
        "vorname" : "Miha",
        "nachname" : "Nowotny",
        "dienstnummer" : "69",
        "rang" : "pd chief",
        "nummer" : "1929210",
        "status" : "online",
        "id" : "31"
    },
    {
        "vorname" : "Miha",
        "nachname" : "Nowotny",
        "dienstnummer" : "69",
        "rang" : "pd chief",
        "nummer" : "1929210",
        "status" : "online",
        "id" : "31"
    },
    {
        "vorname" : "Miha",
        "nachname" : "Nowotny",
        "dienstnummer" : "69",
        "rang" : "pd chief",
        "nummer" : "1929210",
        "status" : "online",
        "id" : "31"
    },
    {
        "vorname" : "Miha",
        "nachname" : "Nowotny",
        "dienstnummer" : "69",
        "rang" : "pd chief",
        "nummer" : "1929210",
        "status" : "online",
        "id" : "31"
    },
    {
        "vorname" : "Miha",
        "nachname" : "Nowotny",
        "dienstnummer" : "69",
        "rang" : "pd chief",
        "nummer" : "1929210",
        "status" : "online",
        "id" : "31"
    },
    {
        "vorname" : "Miha",
        "nachname" : "Nowotny",
        "dienstnummer" : "69",
        "rang" : "pd chief",
        "nummer" : "1929210",
        "status" : "online",
        "id" : "31"
    },
    {
        "vorname" : "Miha",
        "nachname" : "Nowotny",
        "dienstnummer" : "69",
        "rang" : "pd chief",
        "nummer" : "1929210",
        "status" : "online",
        "id" : "31"
    },
    {
        "vorname" : "Miha",
        "nachname" : "Nowotny",
        "dienstnummer" : "69",
        "rang" : "pd chief",
        "nummer" : "1929210",
        "status" : "online",
        "id" : "31"
    },
    {
        "vorname" : "Miha",
        "nachname" : "Nowotny",
        "dienstnummer" : "69",
        "rang" : "pd chief",
        "nummer" : "1929210",
        "status" : "online",
        "id" : "31"
    },
    {
        "vorname" : "Miha",
        "nachname" : "Nowotny",
        "dienstnummer" : "69",
        "rang" : "pd chief",
        "nummer" : "1929210",
        "status" : "online",
        "id" : "31"
    },
    {
        "vorname" : "Miha",
        "nachname" : "Nowotny",
        "dienstnummer" : "69",
        "rang" : "pd chief",
        "nummer" : "1929210",
        "status" : "online",
        "id" : "31"
    },
    {
        "vorname" : "Miha",
        "nachname" : "Nowotny",
        "dienstnummer" : "69",
        "rang" : "pd chief",
        "nummer" : "1929210",
        "status" : "online",
        "id" : "31"
    }
]

var fahndung = [
    
    {
        "name" : "Miha Nowotny",
        "fahndung_id" : "42345",
        "geschlecht" : "mennlich",
        "kennzeichen" : "HUE832",
        "farbe" : "blau",
        "modell" : "Jugular",
        "typ" : "Personen"
    },
    {
        "name" : "Miha Nowotny",
        "fahndung_id" : "42345",
        "geschlecht" : "mennlich",
        "kennzeichen" : "HUE832",
        "farbe" : "blau",
        "modell" : "Jugular",
        "typ" : "Personen"
    },
    {
        "name" : "Miha Nowotny",
        "fahndung_id" : "42345",
        "geschlecht" : "mennlich",
        "kennzeichen" : "HUE832",
        "farbe" : "blau",
        "modell" : "Jugular",
        "typ" : "Personen"
    },
    {
        "name" : "Miha Nowotny",
        "fahndung_id" : "42345",
        "geschlecht" : "mennlich",
        "kennzeichen" : "HUE832",
        "farbe" : "blau",
        "modell" : "Jugular",
        "typ" : "Personen"
    },
    {
        "name" : "Miha Nowotny",
        "fahndung_id" : "42345",
        "geschlecht" : "mennlich",
        "kennzeichen" : "HUE832",
        "farbe" : "blau",
        "modell" : "Jugular",
        "typ" : "Personen"
    },
    {
        "name" : "Miha Nowotny",
        "fahndung_id" : "42345",
        "geschlecht" : "mennlich",
        "kennzeichen" : "HUE832",
        "farbe" : "blau",
        "modell" : "Jugular",
        "typ" : "Personen"
    },
    {
        "name" : "Miha Nowotny",
        "fahndung_id" : "42345",
        "geschlecht" : "mennlich",
        "kennzeichen" : "HUE832",
        "farbe" : "blau",
        "modell" : "Jugular",
        "typ" : "Personen"
    },
    {
        "name" : "Miha Nowotny",
        "fahndung_id" : "42345",
        "geschlecht" : "mennlich",
        "kennzeichen" : "HUE832",
        "farbe" : "blau",
        "modell" : "Jugular",
        "typ" : "Personen"
    },
    {
        "name" : "Miha Nowotny",
        "fahndung_id" : "42345",
        "geschlecht" : "mennlich",
        "kennzeichen" : "HUE832",
        "farbe" : "blau",
        "modell" : "Jugular",
        "typ" : "Personen"
    },
    {
        "name" : "Miha Nowotny",
        "fahndung_id" : "42345",
        "geschlecht" : "mennlich",
        "kennzeichen" : "HUE832",
        "farbe" : "blau",
        "modell" : "Jugular",
        "typ" : "Personen"
    },
    {
        "name" : "Miha Nowotny",
        "fahndung_id" : "42345",
        "geschlecht" : "mennlich",
        "kennzeichen" : "HUE832",
        "farbe" : "blau",
        "modell" : "Jugular",
        "typ" : "Personen"
    },
    {
        "name" : "Miha Nowotny",
        "fahndung_id" : "42345",
        "geschlecht" : "mennlich",
        "kennzeichen" : "HUE832",
        "farbe" : "blau",
        "modell" : "Jugular",
        "typ" : "Personen"
    },
    {
        "name" : "Miha Nowotny",
        "fahndung_id" : "42345",
        "geschlecht" : "mennlich",
        "kennzeichen" : "HUE832",
        "farbe" : "blau",
        "modell" : "Jugular",
        "typ" : "Personen"
    },
    {
        "name" : "Miha Nowotny",
        "fahndung_id" : "42345",
        "geschlecht" : "mennlich",
        "kennzeichen" : "HUE832",
        "farbe" : "blau",
        "modell" : "Jugular",
        "typ" : "Personen"
    },
    {
        "name" : "Miha Nowotny",
        "fahndung_id" : "42345",
        "geschlecht" : "mennlich",
        "kennzeichen" : "HUE832",
        "farbe" : "blau",
        "modell" : "Jugular",
        "typ" : "Personen"
    }
]

var autos = [
    {
        "owner" : "Miha Nowotny",
        "kennzeichen" : "HSU373",
        "modell" : "Felon",
        "farbe" : "Black",
        "status" : "nicht gestohlen"
    },
    {
        "owner" : "Miha Nowotny",
        "kennzeichen" : "HSU373",
        "modell" : "Felon",
        "farbe" : "Black",
        "status" : "nicht gestohlen"
    },
    {
        "owner" : "Miha Nowotny",
        "kennzeichen" : "HSU373",
        "modell" : "Felon",
        "farbe" : "Black",
        "status" : "nicht gestohlen"
    },
    {
        "owner" : "Miha Nowotny",
        "kennzeichen" : "HSU373",
        "modell" : "Felon",
        "farbe" : "Black",
        "status" : "nicht gestohlen"
    },
    {
        "owner" : "Miha Nowotny",
        "kennzeichen" : "HSU373",
        "modell" : "Felon",
        "farbe" : "Black",
        "status" : "nicht gestohlen"
    },
    {
        "owner" : "Miha Nowotny",
        "kennzeichen" : "HSU373",
        "modell" : "Felon",
        "farbe" : "Black",
        "status" : "nicht gestohlen"
    },
    {
        "owner" : "Miha Nowotny",
        "kennzeichen" : "HSU373",
        "modell" : "Felon",
        "farbe" : "Black",
        "status" : "nicht gestohlen"
    },
    {
        "owner" : "Miha Nowotny",
        "kennzeichen" : "HSU373",
        "modell" : "Felon",
        "farbe" : "Black",
        "status" : "nicht gestohlen"
    },
    {
        "owner" : "Miha Nowotny",
        "kennzeichen" : "HSU373",
        "modell" : "Felon",
        "farbe" : "Black",
        "status" : "nicht gestohlen"
    },
    {
        "owner" : "Miha Nowotny",
        "kennzeichen" : "HSU373",
        "modell" : "Felon",
        "farbe" : "Black",
        "status" : "nicht gestohlen"
    },
    {
        "owner" : "Miha Nowotny",
        "kennzeichen" : "HSU373",
        "modell" : "Felon",
        "farbe" : "Black",
        "status" : "nicht gestohlen"
    },
    {
        "owner" : "Miha Nowotny",
        "kennzeichen" : "HSU373",
        "modell" : "Felon",
        "farbe" : "Black",
        "status" : "nicht gestohlen"
    },
    {
        "owner" : "Miha Nowotny",
        "kennzeichen" : "HSU373",
        "modell" : "Felon",
        "farbe" : "Black",
        "status" : "nicht gestohlen"
    },
    {
        "owner" : "Miha Nowotny",
        "kennzeichen" : "HSU373",
        "modell" : "Felon",
        "farbe" : "Black",
        "status" : "nicht gestohlen"
    },
    {
        "owner" : "Miha Nowotny",
        "kennzeichen" : "HSU373",
        "modell" : "Felon",
        "farbe" : "Black",
        "status" : "nicht gestohlen"
    },
    {
        "owner" : "Miha Nowotny",
        "kennzeichen" : "HSU373",
        "modell" : "Felon",
        "farbe" : "Black",
        "status" : "nicht gestohlen"
    },
    {
        "owner" : "Miha Nowotny",
        "kennzeichen" : "HSU373",
        "modell" : "Felon",
        "farbe" : "Black",
        "status" : "nicht gestohlen"
    },
    {
        "owner" : "Miha Nowotny",
        "kennzeichen" : "HSU373",
        "modell" : "Felon",
        "farbe" : "Black",
        "status" : "nicht gestohlen"
    },
]

var Waffen = [
    
    {
        "name" : "Miha Nowotny",
        "typ" : "Pistol",
        "seriennummer" : "23SDF829395SD2",
        "status" : "gestohlen"
    },
    {
        "name" : "Miha Nowotny",
        "typ" : "Pistol",
        "seriennummer" : "23SDF829395SD2",
        "status" : "gestohlen"
    },
    {
        "name" : "Miha Nowotny",
        "typ" : "Pistol",
        "seriennummer" : "23SDF829395SD2",
        "status" : "gestohlen"
    },
    {
        "name" : "Miha Nowotny",
        "typ" : "Pistol",
        "seriennummer" : "23SDF829395SD2",
        "status" : "gestohlen"
    },
    {
        "name" : "Miha Nowotny",
        "typ" : "Pistol",
        "seriennummer" : "23SDF829395SD2",
        "status" : "gestohlen"
    },
    {
        "name" : "Miha Nowotny",
        "typ" : "Pistol",
        "seriennummer" : "23SDF829395SD2",
        "status" : "gestohlen"
    },
    {
        "name" : "Miha Nowotny",
        "typ" : "Pistol",
        "seriennummer" : "23SDF829395SD2",
        "status" : "gestohlen"
    },
    {
        "name" : "Miha Nowotny",
        "typ" : "Pistol",
        "seriennummer" : "23SDF829395SD2",
        "status" : "gestohlen"
    },
    {
        "name" : "Miha Nowotny",
        "typ" : "Pistol",
        "seriennummer" : "23SDF829395SD2",
        "status" : "gestohlen"
    },
    {
        "name" : "Miha Nowotny",
        "typ" : "Pistol",
        "seriennummer" : "23SDF829395SD2",
        "status" : "gestohlen"
    },
    {
        "name" : "Miha Nowotny",
        "typ" : "Pistol",
        "seriennummer" : "23SDF829395SD2",
        "status" : "gestohlen"
    },
    {
        "name" : "Miha Nowotny",
        "typ" : "Pistol",
        "seriennummer" : "23SDF829395SD2",
        "status" : "gestohlen"
    },
    {
        "name" : "Miha Nowotny",
        "typ" : "Pistol",
        "seriennummer" : "23SDF829395SD2",
        "status" : "gestohlen"
    },
    {
        "name" : "Miha Nowotny",
        "typ" : "Pistol",
        "seriennummer" : "23SDF829395SD2",
        "status" : "gestohlen"
    },
    {
        "name" : "Miha Nowotny",
        "typ" : "Pistol",
        "seriennummer" : "23SDF829395SD2",
        "status" : "gestohlen"
    },
    {
        "name" : "Miha Nowotny",
        "typ" : "Pistol",
        "seriennummer" : "23SDF829395SD2",
        "status" : "gestohlen"
    },
    {
        "name" : "Miha Nowotny",
        "typ" : "Pistol",
        "seriennummer" : "23SDF829395SD2",
        "status" : "gestohlen"
    },
    {
        "name" : "Miha Nowotny",
        "typ" : "Pistol",
        "seriennummer" : "23SDF829395SD2",
        "status" : "gestohlen"
    }
]
var sprache  = {
    "decimal":        "",
    "emptyTable":     "No data available in table",
    "info":           "_START_ bis _END_ von _TOTAL_ Einträge",
    "infoEmpty":      "Showing 0 to 0 of 0 entries",
    "infoFiltered":   "(filtered from _MAX_ total entries)",
    "infoPostFix":    "",
    "thousands":      ",",
    "lengthMenu":     "Show _MENU_ entries",
    "loadingRecords": "Loading...",
    "processing":     "",
    "search":         "Suche:",
    "zeroRecords":    "No matching records found",
    "aria": {
        "orderable":  "Order by this column",
        "orderableReverse": "Reverse order this column"
    }
}

var myFuncs = {
    enablehud: function (daten) {
        $('body').css("display","flex");
        buildcontainers(); // start build all containers with daten
    },
    closehud: function (daten) {
        $('body').css("display","none");
    },
    reloadhud: function (daten) {
      stopAllTimers()
      buildcontainers(daten)
  },
}



// Popup fenster für die Spieler
function modal_spieler(daten){
    var blur = $('#main_hud');
    blur.addClass('blur');

    var popupContent = `
        <div class="popup">
            <div class="popup-content">
            <span class="close material-icons-sharp">close</span>
            
                    <aside id="nav">
                        <div class="sidebar-pop">
                            
            
                            <a id="actions" class="menuselect active" onclick="button2('actions')" href="#">
                                <span class="material-icons-sharp">bolt</span>
                                <h3>Actions</h3>
                            </a>
            
                            <a id="infos" class="menuselect" onclick="button2('infos')" href="#">
                                <span class="material-icons-sharp">account_circle</span>
                                <h3>infos</h3>
                            </a>
            
                            <a id="ids" class="menuselect" onclick="button2('ids')" href="#">
                                <span class="material-icons-sharp">format_list_bulleted</span>
                                <h3>IDs</h3>
                            </a>
            
            
                            <a id="history" class="menuselect" onclick="button2('history')" href="#">
                                <span class="material-icons-sharp">history</span>
                                <h3>History</h3>
                            </a>

                            <a id="ban" class="menuselect" onclick="button2('ban')" href="#">
                                <span class="material-icons-sharp">not_interested</span>
                                <h3>Ban</h3>
                            </a>
            
            
                        </div>
        
                    </aside>
                    
                    <div id="popup_action">
                        <!-- generated content -->
                    </div>
                    
            </div>
        </div>
    `;
    
    
    $('body').append(popupContent); 

    button2("actions");

    $(document).mouseup(function(e) {
        var popup = $('.popup-content');
        if (!popup.is(e.target) && popup.has(e.target).length === 0) {
            $('.popup').remove();
            blur.removeClass('blur');
        }
    });
    
    $('.close').click(function() {
        $('.popup').remove();
        blur.removeClass('blur');
    });
}
// Popup fenster für die autos
function modal_autos(daten){
    var blur = $('#main_hud');
    blur.addClass('blur');

    var popupContent = `
        <div class="popup">
            <div class="popup-content">
            <span class="close material-icons-sharp">close</span>
            
                    <aside id="nav">
                        <div class="sidebar-pop">
                            
            
                            <a id="actions" class="menuselect active" onclick="button3('infos')" href="#">
                                <span class="material-icons-sharp">account_circle</span>
                                <h3>infos</h3>
                            </a>
            
                            <a id="infos" class="menuselect" onclick="button3('actions')" href="#">
                                <span class="material-icons-sharp">bolt</span>
                                <h3>Actions</h3>
                            </a>
                        </div>
        
                    </aside>
                    
                    <div id="popup_action2">
                        <!-- generated content -->
                    </div>
                    
            </div>
        </div>
    `;
    
    
    $('body').append(popupContent); 

    button3("infos");

    $(document).mouseup(function(e) {
        var popup = $('.popup-content');
        if (!popup.is(e.target) && popup.has(e.target).length === 0) {
            $('.popup').remove();
            blur.removeClass('blur');
        }
    });
    
    $('.close').click(function() {
        $('.popup').remove();
        blur.removeClass('blur');
    });
}
// Popup fenster für die tickets
function modal_tickets(daten){
    var blur = $('#main_hud');
    blur.addClass('blur');

    var popupContent = `
        <div class="popup">
            <div class="popup-content">
            <span class="close material-icons-sharp">close</span>
            
                    <aside id="nav">
                        <div class="sidebar-pop">
                            
            
                            <a id="actions" class="menuselect active" onclick="button4('infos')" href="#">
                                <span class="material-icons-sharp">account_circle</span>
                                <h3>infos</h3>
                            </a>
            
                            <a id="infos" class="menuselect" onclick="button4('actions')" href="#">
                                <span class="material-icons-sharp">bolt</span>
                                <h3>Actions</h3>
                            </a>
                            <a id="ids" class="menuselect" onclick="button4('ids')" href="#">
                                <span class="material-icons-sharp">format_list_bulleted</span>
                                <h3>IDs</h3>
                            </a>
                            <a id="chat" class="menuselect" onclick="button4('chat')" href="#">
                                <span class="material-icons-sharp">question_answer</span>
                                <h3>Chat</h3>
                            </a>
                        </div>
        
                    </aside>
                    
                    <div id="popup_action2">
                        <!-- generated content -->
                    </div>
                    
            </div>
        </div>
    `;
    
    
    $('body').append(popupContent); 

    button4("infos");

    $(document).mouseup(function(e) {
        var popup = $('.popup-content');
        if (!popup.is(e.target) && popup.has(e.target).length === 0) {
            $('.popup').remove();
            blur.removeClass('blur');
        }
    });
    
    $('.close').click(function() {
        $('.popup').remove();
        blur.removeClass('blur');
    });
}
// Popup fenster für die fahndung erstellung
function modal_fahndung(daten){
    var blur = $('#main_hud');
    blur.addClass('blur');

    var popupContent = `
        <div class="popup">
            <div class="popup-content">
            <span class="close material-icons-sharp">close</span>
            
                    <aside id="nav">
                        <div class="sidebar-pop">
                            
            
                            <a id="actions" class="menuselect active" onclick="button5('person')" href="#">
                                <span class="material-icons-sharp">person</span>
                                <h3>Person</h3>
                            </a>
            
                            <a id="infos" class="menuselect" onclick="button5('fahrzeug')" href="#">
                                <span class="material-icons-sharp">directions_car</span>
                                <h3>Fahrzeug</h3>
                            </a>
                            <a id="ids" class="menuselect" onclick="button5('andere')" href="#">
                                <span class="material-icons-sharp">description</span>
                                <h3>Andere</h3>
                            </a>
                            
                        </div>
        
                    </aside>
                    
                    <div id="popup_action3">
                        <!-- generated content -->
                    </div>
                    
            </div>
        </div>
    `;
    
    
    $('body').append(popupContent); 

    button5("person");

    $(document).mouseup(function(e) {
        var popup = $('.popup-content');
        if (!popup.is(e.target) && popup.has(e.target).length === 0) {
            $('.popup').remove();
            blur.removeClass('blur');
        }
    });
    
    $('.close').click(function() {
        $('.popup').remove();
        blur.removeClass('blur');
    });
}

// Popup fenster für die bericht erstellung
function modal_bericht(daten){
    


    var blur = $('#main_hud');
    blur.addClass('blur');

    var popupContent = `
        <div class="popup-bericht">
            <div class="popup-content-bericht">
                <span class="close material-icons-sharp">close</span>

                <div class="selector-container">
                    <div class="dropdown">
                        <button class="dropdown-toggle" onclick="toggleDropdown()">Bitte auswählen</button>
                        <div class="dropdown-menu">
                            <ul>
                                <li onclick="selectOption(this, 'Text 1')">Option 1</li>
                                <li onclick="selectOption(this, 'Text 2')">Option 2</li>
                                <li onclick="selectOption(this, 'Text 3')">Option 3</li>
                                <li onclick="selectOption(this, 'Text 4')">Option 4</li>
                                <li onclick="selectOption(this, 'Text 5')">Option 5</li>
                                <li onclick="selectOption(this, 'Text 6')">Option 6</li>
                                <li onclick="selectOption(this, 'Text 7')">Option 7</li>
                                <li onclick="selectOption(this, 'Text 8')">Option 8</li>
                                <li onclick="selectOption(this, 'Text 9')">Option 9</li>
                                <li onclick="selectOption(this, 'Text 10')">Option 10</li>
                                <!-- Weitere Optionen hier hinzufügen -->
                            </ul>
                        </div>
                    </div>


                    <p>Lorem ipsum dolor sit amet, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>


                    <a><b>Strafe:</b>   <select name="whishlist" class="selector">
                                            <option>250$</option>
                                            <option>500$</option>
                                            <option>1000$</option>
                                        </select>
                    </a>

                    <b class="monat">6 monate Haft</b>
                    
                    
                </div>

                <button class="erstellen" >Erstellen</button> 
                    
                    
            </div>
        </div>
    `;
    
    
    
    
    document.addEventListener('click', function(event) {
        const dropdown = document.querySelector('.dropdown');
        if (!dropdown.contains(event.target)) {
            closeDropdown();
        }
    });

    $('body').append(popupContent); 

   

    $(document).mouseup(function(e) {
        var popup = $('.popup-content-bericht');
        if (!popup.is(e.target) && popup.has(e.target).length === 0) {
            $('.popup-bericht').remove();
            blur.removeClass('blur');
        }
    });
    
    $('.close').click(function() {
        $('.popup-bericht').remove();
        blur.removeClass('blur');
    });
}

function toggleDropdown() {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
}

function selectOption(option) {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    dropdownToggle.textContent = option.textContent;
    closeDropdown();
}

function closeDropdown() {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    dropdownMenu.style.display = 'none';
}


function buildcontainers() {
    // standard load
    fillcon2_left_dash()

    $('#con2_right').css("display","none")

    const themeToggler = document.querySelector(".theme-toggler");
    const adminToggler = document.querySelector(".admin-toggler");

    themeToggler.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme-variables');

        themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
        themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');  
    })

    adminToggler.addEventListener('click', () => {
        document.body.classList.toggle('admin-variables');

        adminToggler.querySelector('span:nth-child(1)').classList.toggle('active');
        adminToggler.querySelector('span:nth-child(2)').classList.toggle('active');  
    })
    
}
// Popup fenster für die mitarbeiter
function modal_mitarbeiter(daten){
    var blur = $('#main_hud');
    blur.addClass('blur');

    var popupContent = `
        <div class="popup">
            <div class="popup-content">
            <span class="close material-icons-sharp">close</span>
            
                    <aside id="nav">
                        <div class="sidebar-pop">
                            
            
                            <a id="actions" class="menuselect active" onclick="button2('actions')" href="#">
                                <span class="material-icons-sharp">bolt</span>
                                <h3>Actions</h3>
                            </a>
            
                            <a id="infos" class="menuselect" onclick="button2('infos')" href="#">
                                <span class="material-icons-sharp">account_circle</span>
                                <h3>infos</h3>
                            </a>
            
                    

                           
            
            
                        </div>
        
                    </aside>
                    
                    <div id="popup_action">
                        <!-- generated content -->
                    </div>
                    
            </div>
        </div>
    `;
    
    
    $('body').append(popupContent); 

    button2("actions");

    $(document).mouseup(function(e) {
        var popup = $('.popup-content');
        if (!popup.is(e.target) && popup.has(e.target).length === 0) {
            $('.popup').remove();
            blur.removeClass('blur');
        }
    });
    
    $('.close').click(function() {
        $('.popup').remove();
        blur.removeClass('blur');
    });
}

function copyToClipboard(text) {
    var textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
}

// Popup für die mitarbeiter 

function fillpopup_action(){
    $('#popup_action').html(`
        <div class="pop-info">      
            <h2>Spieler Aktionen</h2>
            <h3>Berechtigung</h3>
            <div class="pop-mod">
                <div class="pop-mod2">
                    <div class="checkbox-wrapper-13">
                        <input id="c1-13" type="checkbox">
                        <label for="c1-13">Checkbox</label>
                    </div>
                    <div class="checkbox-wrapper-13">
                        <input id="c2-13" type="checkbox">
                        <label for="c2-13">Checkbox</label>
                    </div>
                    <div class="checkbox-wrapper-13">
                        <input id="c3-13" type="checkbox">
                        <label for="c3-13">Checkbox</label>
                    </div>
                </div>
                <div class="pop-mod2">
                    <div class="checkbox-wrapper-13">
                        <input id="c4-13" type="checkbox">
                        <label for="c4-13">Checkbox</label>
                    </div>
                    <div class="checkbox-wrapper-13">
                        <input id="c5-13" type="checkbox">
                        <label for="c5-13">Checkbox</label>
                    </div>
                    <div class="checkbox-wrapper-13">
                        <input id="c6-13" type="checkbox">
                        <label for="c6-13">Checkbox</label>
                    </div>
                </div>
                <div class="pop-mod2">
                    <div class="checkbox-wrapper-13">
                        <input id="c7-13" type="checkbox">
                        <label for="c7-13">Checkbox</label>
                    </div>
                    <div class="checkbox-wrapper-13">
                        <input id="c7-13" type="checkbox">
                        <label for="c7-13">Checkbox</label>
                    </div>
                    <div class="checkbox-wrapper-13">
                        <input id="c7-13" type="checkbox">
                        <label for="c7-13">Checkbox</label>
                    </div>
                </div>
                
                
                
          
            </div>
            <h3>Ränge</h3>
            <div class="pop-mod">
                <div class="dropdown">
                    <div class="select">
                        <span class="selected">Anwärter</span>
                        <div class="caret"></div>
                    </div>
                    <ul class="menu">
                        <li class="active">Anwärter</li>
                        <li>Rang 1</li>
                        <li>Rang 2</li>
                        <li>Rang 3</li>
                        <li>Rang 4</li>
                        <li>Rang 5</li>
                        <li>Rang 6</li>
                        <li>Rang 7</li>
                        <li>Rang 8</li>
                    </ul>
                </div>
            </div>
            
        </div>
    `)

    $('#popup_action .dropdown').on('click', '.menu li', function() {
        var selected = $(this).text();
        $(this).closest('.dropdown').find('.selected').text(selected);
        $(this).addClass('active').siblings().removeClass('active');
        
        
        $(this).closest('.menu').removeClass('menu-open');
        $(this).closest('.select').removeClass('select-clicked');
        $(this).closest('.select').find('.caret').removeClass('caret-rotate');
    });

    
    $('#popup_action .dropdown .select').click(function() {
        $(this).toggleClass('select-clicked');
        $(this).find('.caret').toggleClass('caret-rotate');
        $(this).siblings('.menu').toggleClass('menu-open');
    });
}

function fillpopup_info(){
    $('#popup_action').html(`
        <div class="pop-info-info">      
            <h2>Mitglieder info</h2>
            <h3>Im Job seit: <a>Apirl 28, 2024 - 18:49:23</a></h3>
            <h3>Im Staat seit: <a>Apirl 28, 2024 - 18:49:23</a></h3>
            
            <h3>Notizen über den spieler</h3>
            <div class="pop-note">
                <textarea rows="4" cols="50" style="width: 100%;" placeholder="Notizen eingeben"></textarea>
                <button class="pop-button">Speichern</button>
            </div>
        </div>
    `)
}

function fillpopup_ids(){
    $('#popup_action').html(`
        <div class="pop-info">      
            <div class="ids">
                <h4>licende:asdfsdf789d6f7ds6f7d7f8d7sfd8f787824h32g47</h4>
                <span class="material-icons-sharp copy-icon">content_copy</span>
            </div>
            <div class="ids">
                <h4>xbl:34563453625752324</h4>
                <span class="material-icons-sharp copy-icon">content_copy</span>
            </div>
            <div class="ids">
                <h4>live:4534534578998457</h4>
                <span class="material-icons-sharp copy-icon">content_copy</span>
            </div>
            <div class="ids">
                <h4>discord:346759829837478968958</h4>
                <span class="material-icons-sharp copy-icon">content_copy</span>
            </div>
            <div class="ids">
                <h4>fivem:68538380</h4>
                <span class="material-icons-sharp copy-icon">content_copy</span>
            </div>
        </div>
`);

    $('.copy-icon').click(function() {
        var textToCopy = $(this).prev('h4').text();
        copyToClipboard(textToCopy);
    });
}

function fillpopup_history(){
    $('#popup_action').html(`
        <div class="pop-info">      
            <h2>Related History</h2>
            <h3>no history found for this player</h3>
        </div>
    `)
}

function fillpopup_ban(){
    

    $('#popup_action').html(`
        <div class="pop-info-ban">      
            <h2>Ban player</h2>
            <h3>reason</h3>
            <input class="ban-reason"></input>
            <h3>duration</h3>
            <div class="dropdown">
                <div class="select">
                    <span class="selected">2 hours</span>
                    <div class="caret"></div>
                </div>
                <ul class="menu">
                    <li class="active">2 hours</li>
                    <li>4 hours</li>
                    <li>16 hours</li>
                    <li>24 hours</li>
                    <li>3 days</li>
                    <li>7 days</li>
                    <li>14 days</li>
                    <li>30 days</li>
                    <li>Perma</li>
                </ul>
            </div>

            <button class="pop-button">Ban</button>

        </div>

    `)

    $('#popup_action .dropdown').on('click', '.menu li', function() {
        var selected = $(this).text();
        $(this).closest('.dropdown').find('.selected').text(selected);
        $(this).addClass('active').siblings().removeClass('active');
        
        
        $(this).closest('.menu').removeClass('menu-open');
        $(this).closest('.select').removeClass('select-clicked');
        $(this).closest('.select').find('.caret').removeClass('caret-rotate');
    });

    
    $('#popup_action .dropdown .select').click(function() {
        $(this).toggleClass('select-clicked');
        $(this).find('.caret').toggleClass('caret-rotate');
        $(this).siblings('.menu').toggleClass('menu-open');
    });
}

function button2(type) {

    if (type == "actions") {
        fillpopup_action() 
        $('.menuselect').removeClass('active');
        $('#actions').addClass('active');

    } else if (type == "infos") {
        fillpopup_info()
        $('.menuselect').removeClass('active');
        $('#infos').addClass('active');
    } else if (type == "ids"){
        fillpopup_ids()
        $('.menuselect').removeClass('active');
        $('#ids').addClass('active');
    } else if (type == "history"){
        fillpopup_history()
        $('.menuselect').removeClass('active');
        $('#history').addClass('active');
        
    }else if (type == "ban"){
        fillpopup_ban()
        $('.menuselect').removeClass('active');
        $('#ban').addClass('active');
        
    }
}

// Popup für die autos

function button3(type) {

    if (type == "infos") {
        fillpopup_auto_info() 
        $('.menuselect').removeClass('active');
        $('#actions').addClass('active');

    } else if (type == "actions") {
        fillpopup_auto_action()
        $('.menuselect').removeClass('active');
        $('#infos').addClass('active');
    } 
}

function fillpopup_auto_info(){
    $('#popup_action2').html(`
        <div class="pop-info">      
            <div class="ids">
                <h4>Modell: Audi RS6 ABT 2020</h4>
                <span class="material-icons-sharp copy-icon">content_copy</span>
            </div>
            <div class="ids">
                <h4>Käufer: Miha Nowotny</h4><h4>Preis: 120.000$</h4><h4>Datum: 01.05.2024</h4>
                <span class="material-icons-sharp copy-icon">content_copy</span>
            </div>
            <div class="ids">
                <h4>Standort: Garage Richman</h4>
                <span class="material-icons-sharp copy-icon">location_on</span>
            </div>
            <div class="ids">
                <h4>networkowner: Miha Nowotny</h4>
                <span class="material-icons-sharp copy-icon">content_copy</span>
            </div>
            <div class="ids">
                <h4>Herkunft: Autoshop</h4>
                <span class="material-icons-sharp copy-icon">content_copy</span>
            </div>
        </div>
    `)
}

function fillpopup_auto_action(){
    $('#popup_action2').html(`
        <div class="pop-info">      
            <h2>Auto Aktionen</h2>
            <h3>Moderation</h3>
            <div class="pop-mod">
                <button class="pop-button">GO TO</button>
                <button class="pop-button">Bring</button>
                <button class="pop-button">Spectate</button>
            </div>
            <h3>Interaction</h3>
            <div class="pop-mod">
                <button class="pop-button">Einparken</button>
                <button class="pop-button">Ausparken</button>
                <button class="pop-button">Abschleppen</button>
                <button class="pop-button">Löschen</button>
                <button class="pop-button">Copy</button>
            </div>
        </div>
    `)
}

// Popup für die tickets

function button4(type) {

    if (type == "infos") {
        fillpopup_ticket_info() 
        $('.menuselect').removeClass('active');
        $('#actions').addClass('active');

    } else if (type == "actions") {
        fillpopup_ticket_action()
        $('.menuselect').removeClass('active');
        $('#infos').addClass('active');
    } else if (type == "ids") {
        fillpopup_ticket_ids()
        $('.menuselect').removeClass('active');
        $('#ids').addClass('active');
    } else if (type == "chat") {
        fillpopup_ticket_chat()
        $('.menuselect').removeClass('active');
        $('#chat').addClass('active');
    } 
}

function fillpopup_ticket_info(){
    $('#popup_action2').html(`
        <div class="pop-info-ticket">   
            <div class="top-ticket">
                <div class="info-ticket">  
                        <h2>Ticket info</h2>
                        <h3>Ticket ID: <a>#273917</a></h3>
                        <h3>Datum: <a>07.05.2024 23:41</a></h3>
                        <h3>Joined: <a>Apirl 28, 2024 - 18:49:23</a></h3>
                        
                        <h3>Notizen über den Vorfall</h3>
                </div>
                <div class="dropdown">
                    <div class="select">
                        <span class="selected">Kategorie</span>
                        <div class="caret"></div>
                    </div>
                    <ul class="menu">
                        <li class="active">Keine</li>
                        <li>Fraktion</li>
                        <li>Allgemein</li>
                        <li>Auto</li>
                        <li>Developer</li>
                        <li>Bewerbung</li>
                    </ul>
                </div>
            </div>
            <ul class="chatbox">
                <li class="chat kommt">
                    <span class="material-icons-sharp" id="ids" onclick="button4('ids')" href="#">account_circle</span>
                    <p id="chat" onclick="button4('chat')" href="#">Ich bin stuck! ich brauche hier schnell hilfe bin in dem MLO seit gestern stuck, da ich die schlüsseln nicht habe komme ich hier nicht mehr raus! brauche dringend hilfe</p>
                </li>
            </ul>
        </div>
    `)

    $('#popup_action2 .dropdown').on('click', '.menu li', function() {
        var selected = $(this).text();
        $(this).closest('.dropdown').find('.selected').text(selected);
        $(this).addClass('active').siblings().removeClass('active');
        
        
        $(this).closest('.menu').removeClass('menu-open');
        $(this).closest('.select').removeClass('select-clicked');
        $(this).closest('.select').find('.caret').removeClass('caret-rotate');
    });

    
    $('#popup_action2 .dropdown .select').click(function() {
        $(this).toggleClass('select-clicked');
        $(this).find('.caret').toggleClass('caret-rotate');
        $(this).siblings('.menu').toggleClass('menu-open');
    });
}


function fillpopup_ticket_ids(){
    $('#popup_action2').html(`
        <div class="pop-info">      
            <div class="ids">
                <h4>licende:asdfsdf789d6f7ds6f7d7f8d7sfd8f787824h32g47</h4>
                <span class="material-icons-sharp copy-icon">content_copy</span>
            </div>
            <div class="ids">
                <h4>xbl:34563453625752324</h4>
                <span class="material-icons-sharp copy-icon">content_copy</span>
            </div>
            <div class="ids">
                <h4>live:4534534578998457</h4>
                <span class="material-icons-sharp copy-icon">content_copy</span>
            </div>
            <div class="ids">
                <h4>discord:346759829837478968958</h4>
                <span class="material-icons-sharp copy-icon">content_copy</span>
            </div>
            <div class="ids">
                <h4>fivem:68538380</h4>
                <span class="material-icons-sharp copy-icon">content_copy</span>
            </div>
        </div>
`);

    $('.copy-icon').click(function() {
        var textToCopy = $(this).prev('h4').text();
        copyToClipboard(textToCopy);
    });
}

function fillpopup_ticket_chat(){
    $('#popup_action2').html(`
        <div class="chatbot">      
            
                <header>
                    <h2>Miha Nowotny | Diaz Cartel</h2>
                </header>
                <ul class="chatbox">
                    <li class="chat kommt">
                        <span class="material-icons-sharp">account_circle</span>
                        <p>Ich bin stuck! ich brauche hier schnell hilfe bin in dem MLO seit gestern stuck, da ich die schlüsseln nicht habe komme ich hier nicht mehr raus! brauche dringend hilfe</p>
                    </li>
                </ul>
                <div class="chat-input">
                    <textarea placeholder="Nachricht senden ..." required></textarea>
                    <span class="material-icons-sharp">send</span>
                </div>
            
        </div>
    `);

    $('.copy-icon').click(function() {
        var textToCopy = $(this).prev('h4').text();
        copyToClipboard(textToCopy);
    });

    const chatInput = document.querySelector(".chat-input textarea");
    const sendChatBtn = document.querySelector(".chat-input span");
    const chatbox = document.querySelector(".chatbox");

    let userMessage;

    const createChatLi = (message, className) => {
        // eine li eintrag erstellen mit nachricht und class
        const chatLi = document.createElement("li");
        chatLi.classList.add("chat", className);
        let chatContent = className === "geht" ? `<p>${message}</p>` : `<span class="material-icons-sharp">account_circle</span><p>${message}</p>`;
        chatLi.innerHTML = chatContent;
        return chatLi;
    }

    const handleChat = () => {
        userMessage = chatInput.value.trim();
        if(!userMessage) return;

        chatbox.appendChild(createChatLi(userMessage, "geht"));
    }

    sendChatBtn.addEventListener("click", handleChat);
}
// Haupt seite / container

function fillcon2_left_dash() {
    $('#con2_left').html(`
        <div class="mitte-oben">
            <div id="list" class="box1" onclick="button1('list')" href="#">      
                
                <div class="middle">
                    <span class="material-icons-sharp">event_available</span>
                    <h2>Verfügbarkeit</2> 

                    
                </div>
                <div class="pop-mod-button">
                    <button>Besetzt</button>
                    <button>Außer Betrieb</button>     
                </div>
                <div class="pop-mod-button">
                    <button>PANIK</button>
                    <button id="danger">In Betrieb</button>     
                </div>
                
            </div>
            <!-------------------------Ende erste block---------------------------->
            <div id="auto" class="box2" onclick="button1('autos')" href="#">
                
                <div class="middle">
                    <span class="material-icons-sharp">wifi_tethering</span>
                    <h2>Status</2> 

                    
                </div>
                <div class="pop-mod-button">
                    <button>Verkehrskontrolle</button>
                    <button>Transport zum Revier</button>     
                </div>
                <div class="pop-mod-button">
                    <button>Am Berufungsort</button>
                    <button id="danger">Unterwegs</button>     
                </div>
            </div>
            <!-------------------------Ende zweite block---------------------------->
            
        </div>

        <!-------------------------Ende insight---------------------------->
        <div class="box-mitte">
            <div class="linksrechts">
                <div class="linkstitle">
                    <h2>Aktive Einheiten</2>
                </div>
                <div class="rechtstitle">
                    <h2>Anrufe</2>
                </div>
                
                
            </div>

            <div class="linksrechts">
                <div class="links">
                    <ul class="einheiten">
                        <li class="einheit">
                            <p><b>Einheit:</b> Miha Nowotny</p>
                            <p><b>Abteilung:</b> LSPD</p>
                            <p><b>Status:</b> Am Berufungsort</p>
                        </li>
                        <li class="einheit">
                            <p><b>Einheit:</b> Miha Nowotny</p>
                            <p><b>Abteilung:</b> LSPD</p>
                            <p><b>Status:</b> Am Berufungsort</p>
                        </li>
                        <li class="einheit">
                            <p><b>Einheit:</b> Miha Nowotny</p>
                            <p><b>Abteilung:</b> LSPD</p>
                            <p><b>Status:</b> Am Berufungsort</p>
                        </li>
                        <li class="einheit">
                            <p><b>Einheit:</b> Miha Nowotny</p>
                            <p><b>Abteilung:</b> LSPD</p>
                            <p><b>Status:</b> Am Berufungsort</p>
                        </li>
                    </ul>               
                </div>
                <div class="rechts">
                    <ul class="anrufe">
                        <li class="anruf">
                            <div class="first">
                                <p><b class="danger">Dispatch:</b> 0001</p>
                                <small class="text-muted">vor 15 Sekunden</small>
                            </div>
                            <p><b>Anrufer:</b> Miha Nowotny</p>
                            <p><b>Ort:</b> LSPD</p>
                            <p><b>Beschreibung:</b> Brauche Hilfe</p>
                            <p><b>Antwortende EInheiten:</b> Streife 002, Streife 002, Streife 002, Streife 002, Streife 002</p> 
                            <button>An Anruf anhängen</button>  
                        </li>

                        <li class="anruf">
                            <div class="first">
                                <p><b class="danger">Dispatch:</b> 0001</p>
                                <small class="text-muted">vor 15 Sekunden</small>
                            </div>
                            <p><b>Anrufer:</b> Miha Nowotny</p>
                            <p><b>Ort:</b> LSPD</p>
                            <p><b>Beschreibung:</b> Brauche Hilfe</p>
                            <p><b>Antwortende EInheiten:</b> Streife 002, Streife 002, Streife 002, Streife 002, Streife 002</p> 
                            <button>An Anruf anhängen</button>  
                        </li>

                        <li class="anruf">
                            <div class="first">
                                <p><b class="danger">Dispatch:</b> 0001</p>
                                <small class="text-muted">vor 15 Sekunden</small>
                            </div>
                            <p><b>Anrufer:</b> Miha Nowotny</p>
                            <p><b>Ort:</b> LSPD</p>
                            <p><b>Beschreibung:</b> Brauche Hilfe</p>
                            <p><b>Antwortende EInheiten:</b> Streife 002, Streife 002, Streife 002, Streife 002, Streife 002</p> 
                            <button>An Anruf anhängen</button>  
                        </li>
                    </ul>

                
                </div>
            </div>

            
        </div>
    `)
}

function fillcon2_left_list() {
    $('#con2_left').html(`
    
    <!-------------------------Ende insight---------------------------->
    <div class="box-mitte">
        
        <table id="spielerTable" class="display" width="100%">
        
            
        </table>
        <!---<a href="#">Mehr Anzeigen</a>---->
    </div>
`)

let toolbar = document.createElement('div');
toolbar.innerHTML = '<h2>Spieler Liste</h2>';

let TableSpieler = $('#spielerTable').DataTable({
    pageLength: 12, 
    lengthChange: false,
    language: sprache,
    layout: {
        topStart: toolbar
    },
    data : spieler,
    'columns' : [
        {data : 'vorname'},
        {data : 'nachname'},
        {data : 'geburtsdatum'},
        {data : 'geschlecht'},
        {data : 'fahndung'},
        {data : 'id'}
    ],
    columnDefs: [
        
        {
            title: 'Vorname',
            targets: 0
        },
        {
            title: 'Nachname',
            targets: 1
        },
        {
            title: 'Geburtsdatum',
            targets: 2
        },
        {
            title: 'Geschlecht',
            targets: 3
        },
        {
            title: 'Fahndung',
            targets: 4
        },
        {
            title: '',
            targets: 5,
            sortable: false
        }
    ]
});

TableSpieler.on("draw", function() {
    if (TableSpieler.column(5).nodes()) {
        TableSpieler.column(5).nodes().each(function(cell, i) {
            var taskid = $(cell).text().trim();
            $(cell).html(`
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-text-fill" viewBox="0 0 16 16" onclick="button6('akte')">
                    <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1m-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5M5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1m0 2h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1"/>
                </svg>        
            `);
        });    
    }    
       
})

TableSpieler.draw();

}
function fillcon2_left_waffen() {
    $('#con2_left').html(`
    <div class="mitte-oben">
        
        
        
        <!-------------------------Ende dritter block---------------------------->
    </div>

    <!-------------------------Ende insight---------------------------->
    <div class="box-mitte">
        
        <table id="waffenTable" class="display" width="100%">
        
            
        </table>
        <!---<a href="#">Mehr Anzeigen</a>---->
    </div>
`)

let toolbar = document.createElement('div');
toolbar.innerHTML = '<h2>Waffen Liste</h2>';


let TableWaffe = $('#waffenTable').DataTable({
    pageLength: 12, 
    lengthChange: false,
    language: sprache,
    layout: {
        topStart: toolbar
    },
    data : Waffen,
    'columns' : [
        {data : 'name'},
        {data : 'typ'},
        {data : 'seriennummer'},
        {data : 'status'},
        {data : 'name'},
        {data : 'seriennummer'}
    ],
    columnDefs: [
        
        {
            title: 'Besitzer',
            targets: 0
        },
        {
            title: 'Waffentyp',
            targets: 1
        },
        {
            title: 'Seriennummer',
            targets: 2
        },
        {
            title: 'Gestohlener Status',
            targets: 3
        },
        {
            title: 'zu Bürger',
            targets: 4,
            sortable: false
        },
        {
            title: 'Gestohlen',
            targets: 5,
            sortable: false
        }
    ]
});

TableWaffe.on("draw", function() {
    if (TableWaffe.column(5).nodes()) {
        TableWaffe.column(5).nodes().each(function(cell, i) {
            var taskid = $(cell).text().trim();
            $(cell).html(`
            
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-binoculars-fill" viewBox="0 0 16 16">
                <path d="M4.5 1A1.5 1.5 0 0 0 3 2.5V3h4v-.5A1.5 1.5 0 0 0 5.5 1zM7 4v1h2V4h4v.882a.5.5 0 0 0 .276.447l.895.447A1.5 1.5 0 0 1 15 7.118V13H9v-1.5a.5.5 0 0 1 .146-.354l.854-.853V9.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v.793l.854.853A.5.5 0 0 1 7 11.5V13H1V7.118a1.5 1.5 0 0 1 .83-1.342l.894-.447A.5.5 0 0 0 3 4.882V4zM1 14v.5A1.5 1.5 0 0 0 2.5 16h3A1.5 1.5 0 0 0 7 14.5V14zm8 0v.5a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5V14zm4-11H9v-.5A1.5 1.5 0 0 1 10.5 1h1A1.5 1.5 0 0 1 13 2.5z"/>
            </svg>
            
            `);
        });    
    } 
    
    if (TableWaffe.column(4).nodes()) {
        TableWaffe.column(4).nodes().each(function(cell, i) {
            var taskid = $(cell).text().trim();
            $(cell).html(`
            
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16" onclick="button1('namen')">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
            </svg>
            
            `);
        });    
    }
       
})

TableWaffe.draw();





}

function fillcon2_left_auto() {
    $('#con2_left').html(`
    <div class="mitte-oben">
        
        
        
        <!-------------------------Ende dritter block---------------------------->
    </div>

    <!-------------------------Ende insight---------------------------->
    <div class="box-mitte">
        
        <table id="autosTable" class="display" width="100%">
        
            
        </table>
        <!---<a href="#">Mehr Anzeigen</a>---->
    </div>
`)

let toolbar = document.createElement('div');
toolbar.innerHTML = '<h2>Auto Liste</h2>';




let TableAuto = $('#autosTable').DataTable({
    pageLength: 12, 
    lengthChange: false,
    language: sprache,
    layout: {
        topStart: toolbar
    },
    data : autos,
    'columns' : [
        {data : 'owner'},
        {data : 'kennzeichen'},
        {data : 'modell'},
        {data : 'farbe'},
        {data : 'status'},
        {data : 'kennzeichen'},
        {data : 'owner'}
    ],
    columnDefs: [
        
        {
            title: 'Besitzer',
            targets: 0
        },
        {
            title: 'Kennzeichen',
            targets: 1
        },
        {
            title: 'Modell',
            targets: 2
        },
        {
            title: 'Farbe',
            targets: 3
        },
        {
            title: 'Gestohlener Status',
            targets: 4
        },
        {
            title: 'zu Bürger',
            targets: 5,
            sortable: false
        },
        {
            title: 'Gestohlen',
            targets: 6,
            sortable: false
        }
    ]
});

TableAuto.on("draw", function() {
    if (TableAuto.column(6).nodes()) {
        TableAuto.column(6).nodes().each(function(cell, i) {
            var taskid = $(cell).text().trim();
            $(cell).html(`
            
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-car-front-fill" viewBox="0 0 16 16">
                <path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679q.05.242.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.8.8 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2m10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2M6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2zM2.906 5.189a.51.51 0 0 0 .497.731c.91-.073 3.35-.17 4.597-.17s3.688.097 4.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 11.691 3H4.309a.5.5 0 0 0-.447.276L2.906 5.19Z"/>
            </svg>
            
            `);
        });    
    } 
    
    if (TableAuto.column(5).nodes()) {
        TableAuto.column(5).nodes().each(function(cell, i) {
            var taskid = $(cell).text().trim();
            $(cell).html(`
            
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16" onclick="button1('namen')">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
            </svg>
            
            `);
        });    
    }
       
})

TableAuto.draw();


}

function fillcon2_left_mitarbeiter() {
    $('#con2_left').html(`
    
    <!-------------------------Ende insight---------------------------->
    <div class="box-mitte">
        
        <table id="mitarbeiterTable" class="display" width="100%">
        
            
        </table>
        <!---<a href="#">Mehr Anzeigen</a>---->
    </div>
    `)

    let toolbar = document.createElement('div');
    toolbar.innerHTML = '<h2>Mitarbeiter Liste</h2>';

    let TableMitarbeiter = $('#mitarbeiterTable').DataTable({
        pageLength: 12, 
        lengthChange: false,
        language: sprache,
        layout: {
            topStart: toolbar
        },
        data : mitarbeiter,
        'columns' : [
            {data : 'vorname'},
            {data : 'nachname'},
            {data : 'dienstnummer'},
            {data : 'rang'},
            {data : 'nummer'},
            {data : 'status'},
            {data : 'id'}
        ],
        columnDefs: [
            
            {
                title: 'Vorname',
                targets: 0
            },
            {
                title: 'Nachname',
                targets: 1
            },
            {
                title: 'Dienstnummer',
                targets: 2
            },
            {
                title: 'Rang',
                targets: 3
            },
            {
                title: 'Nummer',
                targets: 4
            },
            {
                title: 'status',
                targets: 5
            },
            {
                title: '',
                targets: 6,
                sortable: false
            }
        ]
    });

    TableMitarbeiter.on("draw", function() {
        if (TableMitarbeiter.column(6).nodes()) {
            TableMitarbeiter.column(6).nodes().each(function(cell, i) {
                var taskid = $(cell).text().trim();
                $(cell).html(`
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-text-fill" viewBox="0 0 16 16" onclick="modal_mitarbeiter('${taskid}')">
                        <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1m-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5M5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1m0 2h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1"/>
                    </svg>        
                `);
            });    
        }    
        
    })

    TableMitarbeiter.draw();

}

function fillcon2_left_fahndung() {
    $('#con2_left').html(`
    
    <!-------------------------Ende insight---------------------------->
    <div class="box-mitte">
        
        <table id="mitarbeiterTable" class="display" width="100%">
        
            
        </table>
        <!---<a href="#">Mehr Anzeigen</a>---->
    </div>
    `)
   
    

    let toolbar = document.createElement('div');
    toolbar.innerHTML = '<h2>Fahndungen</h2>';

    let TableFahndung = $('#mitarbeiterTable').DataTable({
        pageLength: 12, 
        lengthChange: false,
        language: sprache,
        layout: {
            topStart: toolbar
        },
        data : fahndung,
        'columns' : [
            {data : 'name'},
            {data : 'geschlecht'},
            {data : 'kennzeichen'},
            {data : 'farbe'},
            {data : 'modell'},
            {data : 'typ'},
            {data : 'fahndung_id'},
        ],
        columnDefs: [
            
            {
                title: 'Name',
                targets: 0
            },
            {
                title: 'Geschlecht',
                targets: 1
            },
            {
                title: 'Kennzeichen',
                targets: 2
            },
            {
                title: 'Farbe',
                targets: 3
            },
            {
                title: 'Modell',
                targets: 4
            },
            {
                title: 'Typ',
                targets: 5
            },
            {
                title: '',
                targets: 6,
                sortable: false
            }
        ]
    });

    TableFahndung.on("draw", function() {
        if (TableFahndung.column(6).nodes()) {
            TableFahndung.column(6).nodes().each(function(cell, i) {
                var taskid = $(cell).text().trim();
                $(cell).html(`
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-text-fill" viewBox="0 0 16 16" onclick="modal_fahndung('${taskid}')">
                        <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1m-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5M5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1m0 2h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1"/>
                    </svg>        
                `);
            });    
        }    
        
    })

    TableFahndung.draw();

}

function fillcon2_right() {
    $('#con2_right').html(`
        <div class="top">
            <div class="theme-toggler">
                <span class="material-icons-sharp active">light_mode</span>
                <span class="material-icons-sharp">dark_mode</span>
            </div>
            <div class="profile">
                <div class="info">
                    <p>Hey, <b>Miha</b></p>
                    <small class="text-muted">Admin</small>
                </div>
                <div class="profile-photo">
                    <img src="./images/user.png">
                </div>
            </div>
        </div>

        <div class="box-rechtss">
            <h2>Recent Tickets</h2>
            <div class="updates">
                <div class="update">
                    <div class="profile-photo">
                        <img src="./images/user.png">
                    </div>
                    <div class="message">
                        <p><b>Tobi Tyson </b>Ich brache hier hilfe bin stuck! ...</p>
                        <small class="text-muted">vor 15 Sekunden</small>
                    </div>
                </div>

                <div class="update">
                    <div class="profile-photo">
                        <img src="./images/user.png">
                    </div>
                    <div class="message">
                        <p><b>Miha Nowotny </b>Fail RP hier brauchen Supporter ...</p>
                        <small class="text-muted">vor 30 Sekunden</small>
                    </div>
                </div>

                <div class="update">
                    <div class="profile-photo">
                        <img src="./images/user.png">
                    </div>
                    <div class="message">
                        <p><b>Mike Singer </b>Die Leute hören mich nicht?! ...</p>
                        <small class="text-muted">vor 3 Minuten</small>
                    </div>

                </div>
                <div class="update">
                    <div class="profile-photo">
                        <img src="./images/user.png">
                    </div>
                    <div class="message">
                        <p><b>Tobi Tyson </b>Ich brache hier hilfe bin stuck! ...</p>
                        <small class="text-muted">vor 15 Sekunden</small>
                    </div>
                </div>

                <div class="update">
                    <div class="profile-photo">
                        <img src="./images/user.png">
                    </div>
                    <div class="message">
                        <p><b>Miha Nowotny </b>Fail RP hier brauchen Supporter ...</p>
                        <small class="text-muted">vor 30 Sekunden</small>
                    </div>
                </div>

                <div class="update">
                    <div class="profile-photo">
                        <img src="./images/user.png">
                    </div>
                    <div class="message">
                        <p><b>Mike Singer </b>Die Leute hören mich nicht?! ...</p>
                        <small class="text-muted">vor 3 Minuten</small>
                    </div>

                </div>
            </div>
        </div>
`)

const themeToggler = document.querySelector(".theme-toggler");


themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})

}
// akte


function fillcon2_akte() {
    $('#con2_left').html(`
        <div class="mitte-oben">
            <div id="list" class="box1-akte">      
                    <span class="back material-icons-sharp">arrow_back_ios</span>
                <div class="middle">
                    
                    <img src="./images/user.png">
                    

                    
                </div>
                <div class="akte-info">
                    <p><b>Name:</b> Miha Nowotny</p>
                    <p><b>Geburtsdatum:</b> 17/10/2000</p>
                    <p><b>Geschlecht:</b> Männlich</p>
                    <p><b>Job:</b> PD Chief</p>
                </div>
                
                
            </div>
            <!-------------------------Ende erste block---------------------------->
            <div id="auto" class="box2" href="#">
                
                <div class="middle">
                    <span class="material-icons-sharp">manage_accounts</span>
                    <h2>Aktionen</2> 

                    
                </div>
                <div class="pop-mod-button">
                    <button onclick="button1('kfz')">Fahrzeuge anzeigen</button>
                    <button onclick="button1('waffe')">Waffen anzeigen</button>     
                </div>
                <div class="pop-mod-button">
                    <button onclick="modal_fahndung('')">Fahndung erstellen</button>
                    <button onclick="modal_bericht('')">Bericht erstellen</button>     
                </div>
            </div>
            <!-------------------------Ende zweite block---------------------------->
            
        </div>

        <!-------------------------Ende insight---------------------------->
        <div class="box-mitte-akte">
            

            <div class="linksrechts">
                <div class="links">
                    <p><b>Typ:</b> Ausweis</p>
                    <p><b>Status:</b>   <select name="whishlist" class="selector">
                                            <option>undefiniert</option>
                                            <option>Suspendiert</option>
                                            <option>Abgelaufen</option>
                                        </select>
                    </p>
                    <p><b>Ausgestellt:</b> 11/05/2024</p>
                    <p><b>Läuft ab:</b> 11/05/2024</p>               
                </div>

                <div class="mitte">
                    <h3>Eigenschaften: </h3>
                    
       
                </div>
                <div class="rechts">
                    <textarea rows="6" cols="50" style="width: 100%;" placeholder="Notizen eingeben"></textarea>

                
                </div>
            </div>
            <div class="header">
                <h2>Aufzeihnungen</h2>
                <button>Speichern</button>
            </div>
            <div class="unten">  
                <div class="einträge">
                    <ul class="eintrag">
                        <li class="einzel">
                            <div class="zeile1">
                                <b>Failure to yield to an emergency vehicle:</b>
                                <p class="danger">Verstoß</p>
                            </div>
                            <div class="zeile2">
                                <p><b>Datum:</b> 12/05/2024</p>
                                <p><b>Strafe:</b> 500$</p>
                            </div>
                        </li>
                    </ul> 
                    <ul class="eintrag">
                        <li class="einzel">
                            <div class="zeile1">
                                <b>Failure to yield to an emergency vehicle:</b>
                                <p class="danger">Verstoß</p>
                            </div>
                            <div class="zeile2">
                                <p><b>Datum:</b> 12/05/2024</p>
                                <p><b>Strafe:</b> 500$</p>
                            </div>
                        </li>
                    </ul> 
                    <ul class="eintrag">
                        <li class="einzel">
                            <div class="zeile1">
                                <b>Failure to yield to an emergency vehicle:</b>
                                <p class="danger">Verstoß</p>
                            </div>
                            <div class="zeile2">
                                <p><b>Datum:</b> 12/05/2024</p>
                                <p><b>Strafe:</b> 500$</p>
                            </div>
                        </li>
                    </ul> 
                    <ul class="eintrag">
                        <li class="einzel">
                            <div class="zeile1">
                                <b>Failure to yield to an emergency vehicle:</b>
                                <p class="danger">Verstoß</p>
                            </div>
                            <div class="zeile2">
                                <p><b>Datum:</b> 12/05/2024</p>
                                <p><b>Strafe:</b> 500$</p>
                            </div>
                        </li>
                    </ul> 

                    
                </div>

            </div>

            
        </div>
    `)


    $('.back').click(function() {
        fillcon2_left_list()
        $('#con2_right').css("display","none")
    });



}


// berichte

function fillcon2_left_bericht() {
    $('#con2_left').html(`
    
    <!-------------------------Ende insight---------------------------->
    <div class="box-mitte">
        
        <table id="berichteTable" class="display" width="100%">
        
            
        </table>
        <!---<a href="#">Mehr Anzeigen</a>---->
    </div>
`)



let toolbar = document.createElement('div');
toolbar.innerHTML = '<div class="berichttitel"><h2>Berichte Liste</h2>   <button class="pop-button">Einsatzbericht Erstellen</button>   <button class="pop-button">Ermittlung Erstellen</button></div>';

let TableBerichte = $('#berichteTable').DataTable({
    pageLength: 12, 
    lengthChange: false,
    language: sprache,
    layout: {
        topStart: toolbar
    },
    data : berichte,
    'columns' : [
        {data : 'titel'},
        {data : 'aktenzeichen'},
        {data : 'ort'},
        {data : 'datum'},
        {data : 'status'},
        {data : 'typ'},
        {data : 'aktenzeichen'}
    ],
    columnDefs: [
        
        {
            title: 'Titel',
            targets: 0
        },
        {
            title: 'Aktenzeichen',
            targets: 1
        },
        {
            title: 'Ort',
            targets: 2
        },
        {
            title: 'Datum',
            targets: 3
        },
        {
            title: 'Status',
            targets: 4
        },
        {
            title: 'typ',
            targets: 5
        },
        {
            title: '',
            targets: 6,
            sortable: false
        }
    ]
});

TableBerichte.on("draw", function() {
    if (TableBerichte.column(6).nodes()) {
        TableBerichte.column(6).nodes().each(function(cell, i) {
            var taskid = $(cell).text().trim();
            $(cell).html(`
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-text-fill" viewBox="0 0 16 16" onclick="button6('bericht_info')">
                    <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1m-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5M5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1m0 2h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1"/>
                </svg>        
            `);
        });    
    }    
       
})

TableBerichte.draw();

}

function fillcon2_bericht_info() {
    $('#con2_left').html(`
        <div class="mitte-oben">
            <div id="list" class="box1-bericht">      
                    <span class="back material-icons-sharp">arrow_back_ios</span>
                
                <div class="bericht-info">
                    <p><b>Titel:</b> Casino Schießerei</p>
                    <p><b>Ort:</b> Casino Parkplatz</p>
                    <p><b>Datum:</b> 28/05/2024 - 18:32</p>
                    <p><b>Typ:</b> Einsatzbericht</p>
                </div>

                <div class="middle">
                    
                    <img src="./images/user.png">
                    

                    
                </div>
                
                
            </div>
            <!-------------------------Ende erste block---------------------------->
            <div id="auto" class="box2" href="#">
                
                <div class="middle">
                    <span class="material-icons-sharp">manage_accounts</span>
                    <h2>Aktionen</2> 

                    
                </div>
                <div class="pop-mod-button">
                    <button>Hinzufügen</button>
                    <button>Speichern</button>     
                </div>
                <div class="pop-mod-button">
                    <button>Eintrag erstellen</button>
                    <button>Bericht Abschließen</button>     
                </div>
            </div>
            <!-------------------------Ende zweite block---------------------------->
            
        </div>

        <!-------------------------Ende insight---------------------------->
        <div class="box-mitte-bericht">
            

            <div class="linksrechts">
                <div class="links">
                    <p><b>Typ:</b> Ausweis</p>
                    <p><b>Status:</b>   <select name="whishlist" class="selector">
                                            <option>undefiniert</option>
                                            <option>Suspendiert</option>
                                            <option>Abgelaufen</option>
                                        </select>
                    </p>
                    <p><b>Ausgestellt:</b> 11/05/2024</p>
                    <p><b>Läuft ab:</b> 11/05/2024</p>               
                </div>

                <div class="mitte">
                    <h3>Eigenschaften: </h3>
                    
       
                </div>
                <div class="rechts">
                    <textarea rows="6" cols="50" style="width: 100%;" placeholder="Notizen eingeben"></textarea>

                
                </div>
            </div>
            <div class="header">
                <h2>Aufzeihnungen</h2>
                <button>Speichern</button>
            </div>
            <div class="unten">  
                <div class="einträge">
                    <ul class="eintrag">
                        <li class="einzel">
                            <div class="zeile1">
                                <b>Failure to yield to an emergency vehicle:</b>
                                <p class="danger">Verstoß</p>
                            </div>
                            <div class="zeile2">
                                <p><b>Datum:</b> 12/05/2024</p>
                                <p><b>Strafe:</b> 500$</p>
                            </div>
                        </li>
                    </ul> 
                    <ul class="eintrag">
                        <li class="einzel">
                            <div class="zeile1">
                                <b>Failure to yield to an emergency vehicle:</b>
                                <p class="danger">Verstoß</p>
                            </div>
                            <div class="zeile2">
                                <p><b>Datum:</b> 12/05/2024</p>
                                <p><b>Strafe:</b> 500$</p>
                            </div>
                        </li>
                    </ul> 
                    <ul class="eintrag">
                        <li class="einzel">
                            <div class="zeile1">
                                <b>Failure to yield to an emergency vehicle:</b>
                                <p class="danger">Verstoß</p>
                            </div>
                            <div class="zeile2">
                                <p><b>Datum:</b> 12/05/2024</p>
                                <p><b>Strafe:</b> 500$</p>
                            </div>
                        </li>
                    </ul> 
                    <ul class="eintrag">
                        <li class="einzel">
                            <div class="zeile1">
                                <b>Failure to yield to an emergency vehicle:</b>
                                <p class="danger">Verstoß</p>
                            </div>
                            <div class="zeile2">
                                <p><b>Datum:</b> 12/05/2024</p>
                                <p><b>Strafe:</b> 500$</p>
                            </div>
                        </li>
                    </ul> 

                    
                </div>

            </div>

            
        </div>
    `)


    $('.back').click(function() {
        fillcon2_left_bericht()
        $('#con2_right').css("display","none")
    });



}
// nav buttons
function button1(type) {

    if (type == "dashboard") {
        fillcon2_left_dash()
        $('#con2_right').css("display","none")
        $('.menuselect').removeClass('active');
        $('#dashboard').addClass('active');
    } else if (type == "namen") {
        fillcon2_left_list()
        $('#con2_right').css("display","none")
        $('.menuselect').removeClass('active');
        $('#namen').addClass('active');
    } else if (type == "kfz"){
        fillcon2_left_auto()
        $('#con2_right').css("display","none")
        $('.menuselect').removeClass('active');
        $('#kfz').addClass('active');
    } else if (type == "waffe"){
        fillcon2_left_waffen()
        $('#con2_right').css("display","none")
        $('.menuselect').removeClass('active');
        $('#waffe').addClass('active');
    } else if (type == "fahndung"){
        fillcon2_left_fahndung()
        $('#con2_right').css("display","none")
        $('.menuselect').removeClass('active');
        $('#fahndung').addClass('active');
    } else if (type == "mitarbeiter"){
        fillcon2_left_mitarbeiter()
        $('#con2_right').css("display","none")
        $('.menuselect').removeClass('active');
        $('#mitarbeiter').addClass('active');
    } else if (type == "berichte"){
        fillcon2_left_bericht()
        $('#con2_right').css("display","none")
        $('.menuselect').removeClass('active');
        $('#berichte').addClass('active');
    }
}

function button6(type){
    if (type == "akte"){
        fillcon2_akte()
        $('#con2_right').css("display","none")
    } else if (type == "bericht_info"){
        fillcon2_bericht_info()
        $('#con2_right').css("display","none")
    } 
}

// fahndungen erstellen popup button

function button5(type) {

    if (type == "person") {
        fillpopup_fahndung_person() 
        $('.menuselect').removeClass('active');
        $('#actions').addClass('active');

    } else if (type == "fahrzeug") {
        fillpopup_fahndung_fahrzeug()
        $('.menuselect').removeClass('active');
        $('#infos').addClass('active');
    } else if (type == "andere") {
        fillpopup_fahndung_andere()
        $('.menuselect').removeClass('active');
        $('#ids').addClass('active');
    } 
}


function fillpopup_fahndung_fahrzeug(){
    $('#popup_action3').html(`
        <div class="pop-fahndung-fahrzeug">   
            <div class="top-ticket">
                <h4>Kennzeichen</h4>
                <input type="text" class="input-feld" placeholder="Kennzeichen" />

                <h4>Farbe</h4>
                <input type="text" class="input-feld" placeholder="Farbe" />

                <h4>Marke</h4>
                <input type="text" class="input-feld" placeholder="Marke" />

                <h4>Modell</h4>
                <input type="text" class="input-feld" placeholder="Modell" />


                <h4>Fahndungsinformationen</h4>
                <textarea type="text" class="text-feld" placeholder="Beschreiben Sie wofür der TV Fahndet wird"></textarea>


                <button>Erstellen</button> 
            </div>
            
        </div>
    `)

}

function fillpopup_fahndung_person(){
    $('#popup_action3').html(`
        <div class="pop-fahndung-person">   
            <div class="top-ticket">
                <h4>Vorname</h4>
                <input type="text" class="input-feld" placeholder="Vorname" />

                <h4>Nachname</h4>
                <input type="text" class="input-feld" placeholder="Nachname" />

                <h4>Geschlecht</h4>
                <select name="whishlist" class="selector" size="4">
                        <option>Männlich</option>
                        <option>Weiblich</option>
                </select>


                <h4>Fahndungsinformationen</h4>
                <textarea type="text" class="text-feld" placeholder="Beschreiben Sie wofür der TV Fahndet wird"></textarea>


                <button>Erstellen</button> 
            </div>
            
        </div>
    `)

}

function fillpopup_fahndung_andere(){
    $('#popup_action3').html(`
        <div class="pop-fahndung-andere">   
            <div class="top-ticket">

                <h4>Fahndungsinformationen</h4>
                <textarea type="text" class="text-feld" placeholder="Beschreiben Sie genau um was es sich handelt"></textarea>


                <button>Erstellen</button> 
            </div>
            
        </div>
    `)

}



buildcontainers()