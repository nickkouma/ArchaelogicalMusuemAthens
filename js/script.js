// ALERT ON PAGE LOAD
window.onload = function () {
    alert("Ο συγκεκριμένος ιστότοπος πραγματοποιήθηκε στα πλαίσια εξέτασης του μαθήματος Τεχνολογίες Διαδικτύου του Τμήματος Πολιτισμικής Τεχνολογίας & Επικοινωνίας. Το περιεχόμενο της ιστοσελίδας έχει άδεια περιεχομένου CC0 (Creative Commons zero) και δεν αποτελεί προϊόν εμπορικής χρήσης.");
};

function setLanguage(lang) {

    // GREEK
    if (lang === "gr") {

        document.getElementById("nav-home").innerHTML =
            "Αρχική";

        document.getElementById("nav-about").innerHTML =
            "Σχετικά";

        document.getElementById("nav-contact").innerHTML =
            "Επικοινωνία";

        document.getElementById("title").innerHTML =
            "Εθνικό Αρχαιολογικό Μουσείο";

        document.getElementById("subtitle").innerHTML =
            "Αθήνα, Ελλάδα";

        document.getElementById("about-title").innerHTML =
            "Σχετικά με το Μουσείο";

        document.getElementById("about-text").innerHTML =
            "Το Εθνικό Αρχαιολογικό Μουσείο Αθηνών είναι το μεγαλύτερο μουσείο της Ελλάδας και ένα από τα σημαντικότερα μουσεία στον κόσμο.";

        document.getElementById("about-text2").innerHTML =
            "Το μουσείο περιλαμβάνει διάσημες συλλογές με αγάλματα, χρυσά αντικείμενα, αγγεία και τον Μηχανισμό των Αντικυθήρων.";

        document.getElementById("collection-title").innerHTML =
            "Κύριες Συλλογές";

        document.getElementById("card1-title").innerHTML =
            "Προϊστορική Συλλογή";

        document.getElementById("card1-text").innerHTML =
            "Εκθέματα από τη Νεολιθική και Μυκηναϊκή εποχή.";

        document.getElementById("card2-title").innerHTML =
            "Συλλογή Γλυπτών";

        document.getElementById("card2-text").innerHTML =
            "Αρχαία ελληνικά αγάλματα και αριστουργήματα.";

        document.getElementById("card3-title").innerHTML =
            "Συλλογή Χαλκών";

        document.getElementById("card3-text").innerHTML =
            "Διάσημα χάλκινα αγάλματα και αντικείμενα της αρχαιότητας.";

        document.getElementById("gallery-title").innerHTML =
            "Συλλογή Φωτογραφιών";

        document.getElementById("video-title").innerHTML =
            "Βίντεο Μουσείου";

        document.getElementById("map-title").innerHTML =
            "Τοποθεσία Μουσείου";

        document.getElementById("contact-title").innerHTML =
            "Επικοινωνία";

        document.getElementById("footer-text").innerHTML =
            "Η ιστοσελίδα δημιουργήθηκε για το μάθημα «Τεχνολογίες Διαδικτύου» του Πανεπιστημίου Αιγαίου.";

        document.getElementById("name-label").innerHTML =
            "Ονοματεπώνυμο";

        document.getElementById("email-label").innerHTML =
            "Διεύθυνση Email";

        document.getElementById("message-label").innerHTML =
            "Μήνυμα";

        document.getElementById("submit-btn").innerHTML =
            "Αποστολή Μηνύματος";
    }

    // ENGLISH
    else {

        document.getElementById("nav-home").innerHTML =
            "Home";

        document.getElementById("nav-about").innerHTML =
            "About";

        document.getElementById("nav-contact").innerHTML =
            "Contact";

        document.getElementById("title").innerHTML =
            "National Archaeological Museum";

        document.getElementById("subtitle").innerHTML =
            "Athens, Greece";

        document.getElementById("about-title").innerHTML =
            "About the Museum";

        document.getElementById("about-text").innerHTML =
            "The National Archaeological Museum of Athens is the largest museum in Greece and one of the most important museums in the world.";

        document.getElementById("about-text2").innerHTML =
            "The museum contains famous collections including sculptures, gold artifacts, pottery, and the Antikythera Mechanism.";

        document.getElementById("collection-title").innerHTML =
            "Main Collections";

        document.getElementById("card1-title").innerHTML =
            "Prehistoric Collection";

        document.getElementById("card1-text").innerHTML =
            "Artifacts from the Neolithic and Mycenaean periods.";

        document.getElementById("card2-title").innerHTML =
            "Sculpture Collection";

        document.getElementById("card2-text").innerHTML =
            "Ancient Greek statues and masterpieces.";

        document.getElementById("card3-title").innerHTML =
            "Bronze Collection";

        document.getElementById("card3-text").innerHTML =
            "Famous bronze statues and objects from antiquity.";

        document.getElementById("gallery-title").innerHTML =
            "Museum Gallery";

        document.getElementById("video-title").innerHTML =
            "Museum Video";

        document.getElementById("map-title").innerHTML =
            "Museum Location";

        document.getElementById("contact-title").innerHTML =
            "Contact";

        document.getElementById("footer-text").innerHTML =
            "This website was created for the course Web Technologies at the University of the Aegean.";

        document.getElementById("name-label").innerHTML =
            "Full Name";

        document.getElementById("email-label").innerHTML =
            "Email Address";

        document.getElementById("message-label").innerHTML =
            "Message";

        document.getElementById("submit-btn").innerHTML =
            "Send Message";
    }
}

// CAROUSEL AUDIO - play music only on Antikythera slide (index 2)
document.addEventListener("DOMContentLoaded", function () {

    const carousel = document.getElementById("museumCarousel");
    const audio = document.getElementById("antikythera-audio");

    carousel.addEventListener("slid.bs.carousel", function (e) {

        if (e.to === 2) {
            audio.currentTime = 0;
            audio.play().catch(function(err) {
                console.log("Audio play failed:", err);
            });
        } else {
            audio.pause();
            audio.currentTime = 0;
        }

    });

});

console.log("Museum Website Loaded Successfully");
