﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using WaterSaferAPI.Data;

#nullable disable

namespace WaterSaferAPI.Migrations
{
    [DbContext(typeof(WaterSaferContext))]
    [Migration("20241110184634_RefactorWaterTankAndWaterLog")]
    partial class RefactorWaterTankAndWaterLog
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "8.0.10");

            modelBuilder.Entity("WaterSaferAPI.WaterLog", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Datetime")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<double>("Distance")
                        .HasColumnType("REAL");

                    b.Property<int>("WaterTankId")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.ToTable("WaterLog");
                });

            modelBuilder.Entity("WaterSaferAPI.WaterTank", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<double>("Capacity")
                        .HasColumnType("REAL");

                    b.Property<double>("Diameter")
                        .HasColumnType("REAL");

                    b.Property<double>("Height")
                        .HasColumnType("REAL");

                    b.HasKey("Id");

                    b.ToTable("WaterTank");
                });
#pragma warning restore 612, 618
        }
    }
}
