import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor() { }

  Questions = [
    {intitulé: "De quelle film est tirée la chanson 'Bienvenu à Holloween ?'"},
    {intitulé: "Quelle est l'origine de la fête d'Halloween ?"},
    {intitulé: "Comment dit-on 'citrouille' en anglais ?"},
    {intitulé: "En Grande-Bretagne, comment appelait-on autrefois la fête d'Halloween ?"},
    {intitulé: "Dans les années 1920, comment ce nommait les lanternes de la fête d'Halloween ?"},
    {intitulé: "Quelles sont les deux couleures indisociable d'Halloween ?"},
    {intitulé: "Quel est de coutume de chasser le soir d'Halloween ?"},
    {intitulé: "Quel nom porte le gâteau commercialisé pour la fête d'Halloween ?"},
    {intitulé: "Selon la croyance, les personnes nées le jour d'Halloween ont un talent en particulier, lequel ?"},
    {intitulé: "Selon la croyance, que signifie voir une araignée le jour d'Halloween ?"}
  ]
}
