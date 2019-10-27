


def general_narrative():
    return building_name(Bldg_Name) + view(View) + " located at " + Address + ", " + City \
        + " " + State + " " + Zip + building_area(Business_Park, Market, Submarket) + subway(Subway_Service) \
        + parking_ratio(Parking_Ratio, Parking_Type) + "The property is " \
        + property_type(Property_Type, Bldg_Subtype, Build_Year, Bldg_Class) + ", " \
        + num_stories(Stories) + "with a total size of " + Bldg_Size + " SQ ft. The property most recent sold on " \
        
        

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

def property_type(prop_type, subtype, b_date, b_class):
    if b_date:
            if b_date >= 2015:
                if subtype != 'Office' or subtype != '':
                    return "a modern " + building_class(b_class) + subtype + " " + prop_type + " built in " + b_date + ", "
                else:
                    return "a modern " + building_class(b_class) + prop_type + " built in " + b_date + ", "
            else:
                if subtype != 'Office' or subtype != '':
                    return "a " + building_class(b_class) + subtype + " " + prop_type + " built in " + b_date + ", "
                else:
                    return "a " + building_class(b_class) + prop_type + " built in " + b_date + ", "
    else:
        if subtype != 'Office' or subtype != '':
            return "a " + building_class(b_class) + subtype + " " + prop_type + ", "
        else:
            return "an " + building_class(b_class) + prop_type + ", "

def building_class(b_class):
    if b_class:
        return "Class " + b_class


def subway(subway_distance):
    if subway_distance != 'More than 1 mile':
        return "Perfect for the daily commuter, with the Subway station located within 1 mile. "
    else:
        return"With the subway more then a mile away, its a great way to get some exercise that you don't get in the office. "


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

def parking_ratio(p_ratio, p_type):
    if p_type == 'No Parking':
        return "There is no parking attached to this property. "
    if p_ratio >= 2:
        if p_type == 'Structured Parking' or p_type == 'Underground Garage' or p_type == 'In-Building Above Grade':
            return "There is plenty of parking availble in a Parking Structure. "
        else:
            return "There is plenty of parking available. "
    else:
        return "There is limited parking available. "

def num_stories(stories):
    if stories > 10:
        return "standing " + stories + " tall "



 