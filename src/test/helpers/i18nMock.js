;(function () {
  'use strict';

  var module = angular.module('job-desk.i18n', ['pascalprecht.translate', 'LocalStorageModule', 'tmh.dynamicLocale']);

  module.config(function($translateProvider) {
    // Initialize angular-translate
    var json = {
      "jobs": {
        "navigation": {
          "nextJob":"nächste Stelle",
          "previousJob":"vorherige Stelle"
        },
        "search": {
          "jobgroup":"Was (Berufsgruppe)",
          "location":"Wo (PLZ)",
          "distance":"Distanz {{value}} km",
          "traveltime":"Reisedauer",
          "onlineSince":"Online seit {{value}} Tagen",
          "onlineSinceOneDay":"Online seit 1 Tag",
          "day":"Tag",
          "days":"Tagen",
          "allJobs":"Alle Stellen",
          "parttimeJobs":"Nur Teilzeit Stellen",
          "foundJobs":"Gefundene Stellen: {{value}}",
          "error": {
            "noValidZip":"Die Eingegebene PLZ ist nicht gültig.",
            "noValidCoords":"Bitte wählen Sie einen Ort innerhalb der Schweizerkarte."
          }
        },
        "result": {
          "sorting":"Sortierung",
          "onlineSince":"Online seit {{value}} Tagen",
          "onlineSinceOneDay":"Online seit 1 Tag",
          "availableNow":"ab Sofort",
          "availableFromDate":"ab {{value}}",
          "availableByAppointment":"nach Vereinbarung",
          "untilDate":"befristet bis {{value}}",
          "permanent":"unbefristet",
          "nonPermanent":"befristet",
          "jobLocation": "Arbeitsort, Bemerkung",
          "description": "Tätigkeiten, Anforderungen",
          "feedback": "Hier können Sie die Detaildaten der ausgewählten Stelle einsehen.",
          "foreignJobLocation": "Ausland",
          "onlineApplication": "Online-Bewerbung",
          "jobNumber": "Stellennummer",
          "letterApplication": "siehe Adresse des Unternehmens",
          "supplementaryInformation": "Ergänzende Angaben",
          "workload": "Arbeitspensum",
          "poBox": "Postfach {{value}}",
          "entryDate": "Stellenantritt",
          "phoneNumber": "Telefon",
          "jobDetail": "Jobdetails",
          "companyName": "Unternehmen",
          "contact": "Kontaktperson",
          "titleLanguages":"Sprachen",
          "titleElectronicApplication": "Elektronische Bewerbung",
          "titleWrittenApplication": "Schriftliche Bewerbung",
          "titlePhoneApplication": "Telefonische Bewerbung",
          "titleApplications": "Bewerbungsformen",
          "contractDuration": "Anstellungsdauer",
          "print":"Stelle drucken",
          "spoken":"mündlich",
          "written":"schriftlich",
          "showMore":"Mehr anzeigen",
          "showLess":"Schliessen"
        }
      }
    };

    $translateProvider.translations('en', angular.fromJson(json))
    .translations('de', angular.fromJson(json));
    $translateProvider.preferredLanguage('de');
  });

}());
