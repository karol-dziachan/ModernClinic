package modern.clinic.app.persistence.entities;

import jakarta.persistence.*;
import lombok.*;

//Offer.java
@Entity
@Table(name = "offers")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Offer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="offer_name", length=50, nullable=false, unique=false)
    private String name;

    @ManyToOne(cascade = CascadeType.REMOVE)
    @JoinColumn(name="offer_categories_id", nullable=false, unique=false)
    private OfferCategory offerCategory;

    @Column(name="promo", length=50, nullable=true, unique=false)
    private String promo;

    @Column(name="price", nullable=false, unique=false)
    private float price;

    @Column(name="is_nfz", nullable=false, unique=false)
    private boolean isNfz;

    @Column(name="is_private_offer", length=50, nullable=false, unique=false)
    private boolean isPrivateOffer;
}
