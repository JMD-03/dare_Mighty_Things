


def general_narrative():
    return building_name(Bldg_Name) + view(View) + " located at " + Address + ", " + City \
        + " " + State + " " + Zip + building_area(Business_Park, Market, Submarket) + "The property is " \
        + property_type(Property_Type, Bldg_Subtype, Build_Year) + ", "

def building_name(bldg_name):
    if bldg_name:
        return bldg_name + " "
    else:
        return "This property "

def view(views):
    if views:
        if views == 'Water':
            return " has a beautiful water-front view and is "
        elif views == 'Skyline':
            return " has an incredible skyline and is "
        else:
            return " is a park-side property "

def building_area(b_park, market, submarket):
    if b_park:
        return "in " + b_park + ". "
    elif submarket:
        return "in the " + submarket + " " + market + " area. "
    else:
        return "."

def property_type(prop_type, subtype, b_date):
    if b_date:
            if b_date >= 2015:
                if subtype != 'Office' or subtype != '':
                    return "a modern " + subtype + " " + prop_type + " built in " + b_date + " "
                else:
                    return "a modern " + prop_type + " built in " + b_date + " "
            else:
                if subtype != 'Office' or subtype != '':
                    return "a " + subtype + " " + prop_type + " built in " + b_date + " "
                else:
                    return "a " + prop_type + " built in " + b_date + " "
    else:
        if subtype != 'Office' or subtype != '':
            return "a " + subtype + " " + prop_type + " "
        else:
            return "an " + prop_type + " "

def subway(subway_distance):
    if subway_distance != 'More than 1 mile':
        return "Perfect for the daily commuter, with the Subway station located within 1 mile. "


# def build_date(b_date):
#     if b_date >= 2015:
#         return "modern building built in " + b_date
#     else:
#         return "built in " + b_date

def renovated_date(ren_date):
    if ren_date >= 2013:
        return "newly renovated "

def energy_eff(e_rating):
    if e_rating == 'Platinum' or e_rating == 'Gold':
        return "Building is energy efficient to keep heating and cooling costs down. "

def ceiling_height(c_height):
    if c_height >= 10:
        return "This property is graced by soaring ceilings of " + c_height + " feet."

def tenancy(tenant):
    if tenant == 'Single-Tenant':
        return "Enjoy privacy, security, and freedom in this single-tenant building."
    elif tenant == 'Multi-Tenant':
        return "Building houses multiple tenants."

def occ_rate(rate):
    if rate >= 90:
        return "Building is well occupied. "
    # elif(rate >= 50 and rate < 90):
    #     return ""
    elif rate <= 50:
        return "Building is sparcely occupied. "

def parking_ration(p_ratio, p_type):
    if p_type == 'No Parking':
        return "No Parking attached to Property. "
    if p_ratio >= 2:
        if p_type == 'Structured Parking' or p_type == 'Underground Garage' or p_type == 'In-Building Above Grade':
            return "Plenty of parking availble in a Parking Structure. "
        else:
            return "Plenty of parking available. "
    else:
        return "Limited parking available. "

    



 