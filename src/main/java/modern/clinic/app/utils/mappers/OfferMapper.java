package modern.clinic.app.utils.mappers;

import modern.clinic.app.persistence.datatransferobjects.offer.GetOfferDto;
import modern.clinic.app.persistence.entities.Offer;
import java.util.List;
import java.util.stream.Collectors;

public class OfferMapper {
    public static GetOfferDto toDto(Offer offer) {
        return GetOfferDto.builder()
                .id(offer.getId())
                .name(offer.getName())
                .promo(offer.getPromo())
                .price(offer.getPrice())
                .nfz(offer.isNfz())
                .isPrivateOffer(offer.isPrivateOffer())
                .category(offer.getOfferCategory().getId())
                .build();
    }

    public static List<GetOfferDto> toDtoList(List<Offer> offers) {
        return offers.stream()
                .map(OfferMapper::toDto)
                .collect(Collectors.toList());
    }
}
