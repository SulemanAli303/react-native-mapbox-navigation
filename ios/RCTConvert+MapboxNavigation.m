//
//  RCTConvert+MapboxNavigation.m
//  react-native-mapbox-navigation
//
//  Created by Pawan Kumar Kushwaha on 20/07/24.
//

#import "RCTConvert+MapboxNavigation.h"

@implementation RCTConvert (MapboxNavigation)

+ (MapboxWaypoint *)MapboxWaypoint:(id)json {
    MapboxWaypoint *waypoint = [MapboxWaypoint new];
    json = [self NSDictionary:json];
    waypoint.name = json[@"name"];
    waypoint.separatesLegs = json[@"separatesLegs"] != nil ? [json[@"separatesLegs"] boolValue] : YES;
    waypoint.coordinate = (CLLocationCoordinate2D){
        [self CLLocationDegrees:json[@"latitude"]],
        [self CLLocationDegrees:json[@"longitude"]]
    };
    return waypoint;
}

RCT_ARRAY_CONVERTER(MapboxWaypoint)

+ (MapboxParticipant *)MapboxParticipant:(id)json {
    MapboxParticipant *p = [MapboxParticipant new];
    json = [self NSDictionary:json];
    p.participantId = json[@"_id"];
    p.userMail = json[@"userMail"];
    p.coverImage = json[@"coverImage"];
    p.displayName = json[@"displayName"];
    p.imageUrl = json[@"imageUrl"];
    p.isBenzifiMember = json[@"isBenzifiMember"] != nil ? [json[@"isBenzifiMember"] boolValue] : NO;
    p.nation = json[@"nation"];
    p.userName = json[@"userName"];
    p.coordinate = (CLLocationCoordinate2D){
        [self CLLocationDegrees:json[@"lat"]],
        [self CLLocationDegrees:json[@"lng"]]
    };
    return p;
}

RCT_ARRAY_CONVERTER(MapboxParticipant)

@end

