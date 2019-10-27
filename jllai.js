function general_narrative(listing){
    var toReturn = "";
    toReturn += building_name(listing["Bldg Name"]);
    toReturn += listing["View"];
    toReturn += " located at "; 
    toReturn +=  listing["Address"];
    toReturn += ", " ;
    toReturn += listing["City"] ;
    toReturn += " " ;
    toReturn += listing["State"] ;
    toReturn +=" "; 
    toReturn += listing["Zip"] + " ";
    toReturn += building_area(listing["Business Park"], listing["Market"], listing["Submarket"]); 
    toReturn += subway(listing["Subway Service"]) ;
    toReturn += parking_ratio(listing["Parking Ratio"], listing["Parking Type"]); 
    toReturn += "The property is ";
    toReturn += property_type(listing["Property Type"], listing["Bldg Subtype"], listing["Build Year"], listing["Bldg Class"]);
    toReturn += renovated_date(listing["Renovated Year"]) 
    toReturn += num_stories(listing["Stories"]); 
    toReturn += "with a total size of " ;
    toReturn += listing["Bldg Size"] + " SQ ft.";
    toReturn += energy_eff(listing["Energy Efficiency"], listing["Bldg Name"]);
    toReturn += ceiling_height(listing["Ceiling Height Feet"]);
    toReturn += "The property most recent sold on " ;
    toReturn += listing["Sold Date"] ;
    toReturn += " for " ;
    toReturn += listing["Sales Price"] ;
    toReturn += " from "; 
    toReturn += listing["Seller"] ;
    toReturn += sale_confidence(listing["Sale is Confidential"], listing["Buyer"]);
    toReturn += "The property is leased by ";
    toReturn += listing["Landlord Leasing Company"] + ".";
    toReturn += occ_rate(listing["Occ Rate"]);
    
    return toReturn;

}

function building_name(bldg_name) {

    if (bldg_name) {
        return bldg_name + " "
    }
    else{
        return "This property "
    }

}

function view(views) {
    if (views) {
        if (views == 'Water') {
            beautiful_adj = ["brilliant", "gorgeous", "spectacular", "out of this world", "stunning"]
            return " has a {} water-front view and is ".format(random.choice(beautiful_adj))
        }
        else if (views == 'Skyline') {
            incredible_adj = ["fabulous", "gorgeous", "spectacular", "unreal", "amazing"]
            return " has an {} skyline and is ".format(random.choice(incredible_adj))
        }
        else{
            return " is a park-side property "
        }
    }
    
}

function building_area(b_park, market, submarket) {
    if (b_park){
        return "in " + b_park + ". "
    }
    else if (submarket){
        return "in the " + submarket + " " + market + " area. "
    }
    else{
        return ". "
    }
}

function property_type(prop_type, subtype, b_date, b_class){
    var dt = new Date();
    if (b_date) {
        if (b_date >= 2015){
            if (subtype == prop_type){
                return "a modern " + building_class(b_class) +  " " + prop_type + " built in " + b_date + ", "}
            else{
                return "a modern " + building_class(b_class) + subtype + prop_type + " built in " + b_date + ", "
            }
        }
        else if (dt.getYear() < b_date){
            if (subtype == prop_type){
                return "a modern " + building_class(b_class) +  " " + prop_type + " coming in " + b_date + ", "
            }
            else{
                return "a modern " + building_class(b_class) + subtype + prop_type + " coming in " + b_date + ", "
            }
        }
        else{
            if (subtype == prop_type){
                return "a " + building_class(b_class) + " " + prop_type + " built in " + b_date + ", "
            }
            else{
                return "a " + building_class(b_class) + subtype + prop_type + " built in " + b_date + ", "
            }
        }
    }
    else{
        if (subtype == prop_type){
            return "a " + building_class(b_class) + " " + prop_type + ", "
        }
        else{
            return "an " + building_class(b_class) + subtype + prop_type + ", "
        }
    }
}

function building_class(b_class){
    if (b_class) {
        return "Class " + b_class + " "
    }
    else{
        return ""
    }
}


function subway(subway_distance) {
    if (subway_distance != 'More than 1 mile') {
        return "Perfect for the daily commuter, with the Subway station located within 1 mile. "
    }
    else{
        return "With the subway more then a mile away, its a great way to get some exercise that you don't get in the office. "
    }
}
//function build_date(b_date):
//    if b_date >= 2015:
//        return "modern building built in " + b_date
//    else:
//         return "built in " + b_date

function renovated_date(ren_date){
    if (ren_date >= 2013){
        return "and newly renovated in " + ren_date + ", "
    }
    else{
        return ""
    }
}

function energy_eff(e_rating, bldg_name){
    if(bldg_name){
        if (e_rating == 'Platinum' || e_rating == 'Gold'){
            return bldg_name + " is energy efficient to keep heating and cooling costs down. "
        }
        else{
            return ""
        }
    }
    else{
        if (e_rating == 'Platinum' || e_rating == 'Gold'){
            return "This property is energy efficient to keep heating and cooling costs down. "
        }
        else{
            return ""
        }
    }
}

function ceiling_height(c_height){
    if (c_height >= 10){
        return "This property is graced by soaring ceilings of " + c_height + " feet."
    }
    else{
        return ""
    }
}

function tenancy(tenant){
    if (tenant == 'Single-Tenant') {
        return "Enjoy privacy, security, and freedom in this single-tenant building."
    }
    else if (tenant == 'Multi-Tenant'){
        return "Building houses multiple tenants."
    }
    else{
        return ""
    }
}

function occ_rate(rate){
    if (rate >= 90) {
        return "This building is well occupied at " + rate + ". "
    }
// else if(rate >= 50 and rate < 90):
//    return ""
    else if (rate <= 50){
        return "This building is sparcely occupied at " + rate + ". "
    }
    else{
        return ""
    }
}

function parking_ratio(p_ratio, p_type){
    if (p_type == 'No Parking') {
        return "There is no parking attached to this property. "
    }
    if (p_ratio >= 2) {
        if (p_type == 'Structured Parking' || p_type == 'Underground Garage' || p_type == 'In-Building Above Grade')
        return "There is plenty of parking availble in a Parking Structure. "
            else
            return "There is plenty of parking available. " }
    else
        return "There is limited parking available. "
    }

function num_stories(stories){
    if (stories > 10) {
        return "standing " + stories + " stories tall "
    }
    else{
        return ""
    }
}

function sale_confidence(conf, buyer){
    if (conf == 'No') {
        return " to " + buyer
    }
    else{
        return ". "
    }
}

function amenities(amens){
    if(amens){
        return "This location includes " + amens.toLowerCase() + " as amenities. "
    }
    else{
        return ""
    }
}