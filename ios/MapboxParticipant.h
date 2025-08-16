//
//  MapboxParticipant.h
//

#import <Foundation/Foundation.h>
#import <MapKit/MapKit.h>

@interface MapboxParticipant : NSObject

@property(nonatomic, strong) NSString *participantId;
@property(nonatomic, strong) NSString *userMail;
@property(nonatomic, strong) NSString *coverImage;
@property(nonatomic, strong) NSString *displayName;
@property(nonatomic, strong) NSString *imageUrl;
@property(nonatomic, assign) BOOL isBenzifiMember;
@property(nonatomic, strong) NSString *nation;
@property(nonatomic, strong) NSString *userName;
@property(nonatomic, assign) CLLocationCoordinate2D coordinate;

@end