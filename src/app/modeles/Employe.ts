
export interface Employe {
	id:number;
	cin_emp:string;
	nom_emp: string;
	prenom_emp:string;
	date_naissance_emp:Date;
	tel1_emp:string;
	tel2_emp:string;
	mob1_emp: string;
	mob2_emp: string;
	etat_civil_emp:string;
	date_recrutement_emp:Date;
	salaire_base_emp:number;
	role_emp:string
	seuil_conge_maladie:number;
	seuil_conge_annuel:number
	seuil_conge_accidentel:number;
	var_seuil_conge_maladie:number;
	var_seuil_conge_annuel:number;
	var_seuil_conge_accidentel:number;
	salaire_journaliere:number;
	ecole:string;
	niveau:string;
	dt_obtention:Date;

	//profile_image:File;
}
