package modern.clinic.app.persistence.entities;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

//OfferCategory.java
@Entity
@Table(name = "offer_categories")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class OfferCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="category_name", length=50, nullable=false, unique=false)
    private String name;

    @OneToMany(mappedBy = "offerCategory")
    @JsonIgnoreProperties("offer_category")
    @JsonIgnore
    private List<Offer> offers;
}
